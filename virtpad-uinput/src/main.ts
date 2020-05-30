import uinput, { abs, Abs as UAbs, CreateConfig, SetupConfig } from 'uinput';
import { Abs, Config, Driver, Key } from 'virtpad-shared';
import { absMap, keyMap } from './map';

export default class Input extends Driver {
	private uinputCache?: uinput.UInput;

	async ready (config: Config) {
		this.config = config;
		console.log(config);

		if (this.uinputCache == null) {
			const device = await uinput.setup(this.setupConfig);
			this.uinputCache = device;
			await device.create(this.createConfig);
		}
	}

	private get setupConfig (): SetupConfig {
		const absList = Object.keys(this.config.abs);

		return {
			EV_KEY: this.config.keys.map(key => keyMap[key]),
			EV_ABS: absList.map(abs => absMap[+abs as Abs]),
		};
	}

	private get createConfig (): CreateConfig {
		const absMin: UAbs[] = [];
		const absMax: UAbs[] = [];

		for (const absStr of Object.keys(this.config.abs)) {
			const absRef = +absStr as Abs;
			absMin.push(abs(absMap[absRef], this.config.abs[absRef]![0]));
			absMax.push(abs(absMap[absRef], this.config.abs[absRef]![1]));
		}

		return {
			name: this.config.name,
			id: {
				...this.config.id,
				busType: uinput.events.BUS_VIRTUAL,
			},
			absMin,
			absMax,
		};
	}

	async sendKey (key: Key, value: number) {
		await this.readyState;
		await this.uinputCache!.sendEvent(uinput.events.EV_KEY, keyMap[key], value);
	}

	async sendAbs (abs: Abs, value: number) {
		await this.readyState;
		await this.uinputCache!.sendEvent(uinput.events.EV_ABS, absMap[abs], value);
	}

	async stop () {
		await this.readyState;
		await this.uinputCache!.destroy();
		this.uinputCache = undefined;
	}
}
