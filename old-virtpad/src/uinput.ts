/// <reference path="./uinput.d.ts" />
import bindings from 'bindings';
import uinput from 'uinput';

const _uin = bindings('../node_modules/uinput/build/Release/uinput.node');
const inputEvent = _uin.input_event as uinput.InputEvent;

export class Input {
	private deviceCache?: uinput.UInput;

	constructor (
		readonly setupConfig: uinput.SetupConfig,
		readonly createConfig: uinput.CreateConfig,
	) { }

	async init () {
		if (this.deviceCache == null) {
			const device = await uinput.setup(this.setupConfig);
			this.deviceCache = device;
			await device.create(this.createConfig);
		}
	}

	async sendEvent (...args: Parameters<uinput.UInput['sendEvent']>) {
		await this.init();
		await this.deviceCache!.sendEvent(...args);
	}

	async writeEvent (...args: Parameters<uinput.InputEvent>) {
		await this.init();
		await this.deviceCache!.write(inputEvent(...args));
	}

	async flushEvent () {
		await this.init();
		await this.deviceCache!.write(inputEvent(uinput.EV_SYN, uinput.SYN_REPORT, 0));;
	}
}
