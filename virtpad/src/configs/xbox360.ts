import { Abs, GamepadConfigBuilder, I32_MAX, I32_MIN, Key, XInputCompat } from 'virtpad-shared';

const builder: GamepadConfigBuilder = () => {
	return {
		name: 'xbox-360',
		xinputCompatible: XInputCompat.COMPLETE,
		keys: [
			Key.A, Key.B, Key.X, Key.Y,
			Key.L1, Key.R1, Key.L3, Key.R3,
			Key.START, Key.SELECT, Key.HOME,
		],
		abs: {
			[Abs.LX]: [I32_MIN, I32_MAX],
			[Abs.LY]: [I32_MIN, I32_MAX],
			[Abs.RX]: [I32_MIN, I32_MAX],
			[Abs.RY]: [I32_MIN, I32_MAX],
			[Abs.HAT0X]: [-1, 1],
			[Abs.HAT0Y]: [-1, 1],
			[Abs.LT]: [0, I32_MAX],
			[Abs.RT]: [0, I32_MAX],
		},
		id: {
			product: 1,
			vendor: 1,
			version: 1,
		}
	};
};

export default builder;
