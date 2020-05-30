import { AsyncTask } from './task';

export enum XInputCompat {
	// Every feature can be made in xinput.
	// Example: XBox controllers.
	COMPLETE,

	// Some keys/abs' are placed in the wrong position.
	// Example: Most of Nintendo controllers. (A-B, X-Y)
	PARTIAL,

	// Some features are not supported.
	// Example: Dualshock 4 touch pad.
	INCOMPLETE,

	// Major features are not supported.
	// Example: NES SuperScope.
	IMPOSSIBLE,
}

export interface Config {
	name: string;
	xinputCompatible: XInputCompat;
	keys: Key[];
	abs: {[x in Abs]?: [number, number]};

	id: {
		vendor: number;
		product: number;
		version: number;
	};
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

export abstract class Driver extends AsyncTask<(config: Config) => void> {
	constructor (protected config: Config) { super(config); }
	abstract sendKey (key: Key, value: number): Promise<void>;
	abstract sendAbs (abs: Abs, value: number): Promise<void>;
}

export const I32_MIN = -0x80000000;
export const I32_MAX = +0x7FFFFFFF;

export type GamepadConfigBuilder = (config?: any) => Config;
export * from './task';
