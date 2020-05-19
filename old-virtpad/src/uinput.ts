import bindings from 'bindings';
import uinput from 'uinput';

const _uin = bindings('../node_modules/uinput/build/Release/uinput.node');
const inputEvent = _uin.input_event as uinput.InputEvent;

export class Input {
	private uinputCache?: uinput.UInput;

	constructor (
		readonly setupConfig: uinput.SetupConfig,
		readonly createConfig: uinput.CreateConfig,
	) { }

	async init () {
		if (this.uinputCache == null) {
			const device = await uinput.setup(this.setupConfig);
			this.uinputCache = device;
			await device.create(this.createConfig);
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