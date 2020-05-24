import uinput from 'uinput';
import { Abs, Driver, Key } from 'virtpad-shared';
import { absMap, keyMap } from './map';

export class Input extends Driver {
	private uinputCache?: uinput.UInput;

	async init () {
		if (this.uinputCache == null) {
			const device = await uinput.setup(this.config.setup);
			this.uinputCache = device;
			await device.create(this.config.create);
		}
	}

	async sendKey (key: Key, value: number) {
		await this.init();
		await this.uinputCache!.sendEvent(uinput.events.EV_KEY, keyMap[key], value);
	}

	async sendAbs (abs: Abs, value: number) {
		await this.init();
		await this.uinputCache!.sendEvent(uinput.events.EV_ABS, absMap[abs], value);
	}
}
