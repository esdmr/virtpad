import bindings from 'bindings';
import uinput from 'uinput';

const _uin = bindings('../node_modules/uinput/build/Release/uinput.node');
const inputEvent = _uin.input_event as uinput.InputEvent;

interface UInputConfig {
	setup: uinput.SetupConfig;
	create: uinput.CreateConfig;
}

export class Input {
	private uinputCache?: uinput.UInput;
	constructor (readonly config: UInputConfig) { }

	async init () {
		if (this.uinputCache == null) {
			const device = await uinput.setup(this.config.setup);
			this.uinputCache = device;
			await device.create(this.config.create);
		}
	}

	async sendEvent (...args: Parameters<uinput.UInput['sendEvent']>) {
		await this.init();
		await this.uinputCache!.sendEvent(...args);
	}

	async writeEvent (...args: Parameters<uinput.InputEvent>) {
		await this.init();
		await this.uinputCache!.write(inputEvent(...args));
	}

	async flushEvent () {
		await this.init();
		await this.uinputCache!.write(inputEvent(uinput.events.EV_SYN, uinput.events.SYN_REPORT, 0));;
	}
}
