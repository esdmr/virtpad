import type { CreateConfig, SetupConfig } from '../../uinput';

export interface Config {
	setup: SetupConfig;
	create: CreateConfig;
}

export abstract class Driver {
	constructor (protected config: Config) {}
	abstract init (): Promise<void>;

}
