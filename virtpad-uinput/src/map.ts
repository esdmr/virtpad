import { events } from 'uinput';
import { Abs, Key } from 'virtpad-shared';

export const keyMap: { [k in Key]: number; } = {
	[Key.A]: events.BTN_A,
	[Key.B]: events.BTN_B,
	[Key.C]: events.BTN_C,
	[Key.X]: events.BTN_X,
	[Key.Y]: events.BTN_Y,
	[Key.Z]: events.BTN_Z,
	[Key.L1]: events.BTN_TL,
	[Key.L2]: events.BTN_TL2,
	[Key.L3]: events.BTN_THUMB,
	[Key.R1]: events.BTN_TR,
	[Key.R2]: events.BTN_TR2,
	[Key.R3]: events.BTN_THUMB2,
	[Key.START]: events.BTN_START,
	[Key.SELECT]: events.BTN_SELECT,
	[Key.HOME]: events.BTN_MODE,
} as const;

export const absMap: { [k in Abs]: number; } = {
	[Abs.LX]: events.ABS_X,
	[Abs.LY]: events.ABS_Y,
	[Abs.LZ]: events.ABS_Z,
	[Abs.RX]: events.ABS_RX,
	[Abs.RY]: events.ABS_RY,
	[Abs.RZ]: events.ABS_RZ,
	[Abs.LT]: events.ABS_GAS,
	[Abs.RT]: events.ABS_BRAKE,
	[Abs.HAT0X]: events.ABS_HAT0X,
	[Abs.HAT0Y]: events.ABS_HAT0Y,
	[Abs.HAT1X]: events.ABS_HAT1X,
	[Abs.HAT1Y]: events.ABS_HAT1Y,
	[Abs.HAT2X]: events.ABS_HAT2X,
	[Abs.HAT2Y]: events.ABS_HAT2Y,
	[Abs.HAT3X]: events.ABS_HAT3X,
	[Abs.HAT3Y]: events.ABS_HAT3Y,
} as const;
