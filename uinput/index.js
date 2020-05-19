/// <reference path="./index.d.ts" />
const fs = require('fs');
const bindings = require('bindings')('uinput');
const ioctl = require('ioctl');
const os = require('os');

/** @type {import('./index').InputEvent} */
const inputEvent = bindings.input_event;
/** @type {import('./index')['events']} */
const events = bindings.events;

let writeUInt16 = /** @type {'writeUInt16LE' | 'writeUInt16BE'} */
    ('writeUInt16' + os.endianness());

let writeUInt32 = /** @type {'writeUInt32LE' | 'writeUInt32BE'} */
    ('writeUInt32' + os.endianness());

// struct input_id {
//     __u16 bustype;
//     __u16 vendor;
//     __u16 product;
//     __u16 version;
// };

/**
 * @param {import('./index').CreateConfig['id']} options
 */
function inputId (options) {
    const buffer = Buffer.alloc(4 * 2);
    buffer[writeUInt16](options.busType, 0);
    buffer[writeUInt16](options.vendor, 2);
    buffer[writeUInt16](options.product, 4);
    buffer[writeUInt16](options.version, 6);
    return buffer;
};

/**
 * @param {string} name
 */
function deviceName (name) {
    const buf = Buffer.alloc(events.UINPUT_MAX_NAME_SIZE);

    if (name) {
        buf.write(name, 0);
    }

    return buf;
}

/**
 * @param {import('./index').IAbs[]} abs
 */
function absArray (abs) {
    const buf = Buffer.alloc(events.ABS_CNT * 4);

    if (abs) {
        for (let i = 0; i < abs.length; i++) {
            buf[writeUInt32](abs[i].value, abs[i].offset * 4);
        }
    }

    return buf;
}

/**
 * @param {number} offset
 * @param {number} value
 * @returns {import('./index').IAbs}
 */
function abs (offset, value) {
    return {
        offset: offset,
        value: value
    };
};

/**
 * @param {import('./index').CreateConfig} options
 */
function uinputUserDev (options) {
    const name = deviceName(options.name);
    const id = inputId(options.id);

    const ffEffectsMax = Buffer.alloc(4);
    ffEffectsMax[writeUInt32](options.ffEffectsMax || 0, 0);

    const absMax = absArray(options.absMax);
    const absMin = absArray(options.absMin);
    const absFuzz = absArray(options.absFuzz);
    const absFlat = absArray(options.absFlat);

    return Buffer.concat([
        name,
        id,
        ffEffectsMax,
        absMax,
        absMin,
        absFuzz,
        absFlat
    ]);
}

const ioctls = [
    events.UI_SET_KEYBIT,
    events.UI_SET_RELBIT,
    events.UI_SET_ABSBIT,
    events.UI_SET_MSCBIT,
    events.UI_SET_LEDBIT,
    events.UI_SET_SNDBIT,
    events.UI_SET_FFBIT,
    events.UI_SET_PHYS,
    events.UI_SET_SWBIT,
    events.UI_SET_PROPBIT
];

class UInput {
    constructor (stream) {
        this.stream = stream;
    }

    async write (data) {
        return new Promise((resolve, reject) => {
            this.stream.once('error', reject);
            this.stream.write(data, (err) => {
                this.stream.removeAllListeners('error');
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    async create (options) {
        if (!options.id) {
            throw new Error('Device id params is mandatory');
        }

        const userDev = uinputUserDev(options);

        return new Promise((resolve, reject) => {
            this.stream.once('error', reject);
            this.stream.write(userDev, (err) => {
                if (ioctl(this.stream.fd, events.UI_DEV_CREATE)) {
                    throw new Error('Could not create uinput device');
                }

                this.stream.removeAllListeners('error');
                resolve();
            });
        });
    }

    async sendEvent (type, code, value) {
        await this.write(inputEvent(type, code, value));
        await this.write(inputEvent(events.EV_SYN, events.SYN_REPORT, 0));
    }

    async keyEvent (code) {
        /* press / click */
        await this.sendEvent(events.EV_KEY, code, 1);
        await this.sendEvent(events.EV_KEY, code, 0);
    }

    async emitCombo (code) {
        // Press each of the keys in series
        for (let i = 0; i < code.length; i++) {
            await this.sendEvent(events.EV_KEY, code[i], 1);
        }
        // Release them in reverse
        for (let i = code.length; i-- > 0;) {
            await this.sendEvent(events.EV_KEY, code[i], 0);
        }
    }
};

async function setup (options) {
    return new Promise((resolve, reject) => {
        const stream = fs.createWriteStream('/dev/uinput');
        const uinput = new UInput(stream);
        stream.once('error', reject);
        stream.on('open', (fd) => {
            const eventKeys = Object.keys(options);
            for (let i = 0; i < eventKeys.length; i++) {
                const ev = eventKeys[i];
                if (ioctl(fd, events.UI_SET_EVBIT, events[ev])) {
                    throw new Error("Could not listen for event: " + ev);
                }
                for (let j = 0; j < (options[ev]).length; j++) {
                    const val = options[ev][j];
                    if (ioctl(fd, ioctls[events[ev] - 1], val)) {
                        throw new Error("Could not setup: " + val);
                    }
                }
            }
            stream.removeAllListeners('error');
            resolve(uinput);
        });
    });
}

module.exports.events = events;
module.exports.abs = abs;
module.exports.setup = setup;
