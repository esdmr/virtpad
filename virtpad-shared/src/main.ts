import type { CreateConfig, SetupConfig } from '../../uinput';
import { AsyncTask } from './task';

export interface Config {
	setup: SetupConfig;
	create: CreateConfig;
}

export enum Key {
	A, B, C,
	X, Y, Z,
	L1, L2, L3,
	R1, R2, R3,
	SELECT, START, HOME,
}

export enum Abs {
	LX, LY, LZ,
	RX, RY, RZ,
	LT, RT,
	HAT0X, HAT0Y,
	HAT1X, HAT1Y,
	HAT2X, HAT2Y,
	HAT3X, HAT3Y,
}

export abstract class Driver extends AsyncTask {
	constructor (protected config: Config) { super(); }
	abstract sendKey (key: Key, value: number): Promise<void>;
	abstract sendAbs (abs: Abs, value: number): Promise<void>;
}

export * from './task';
