import { Driver } from 'virtpad-shared';

export async function getDriver (): Promise<typeof Driver> {
	// TODO: Include more drivers.
	const { default: UInput } = await import('virtpad-uinput');
	return UInput;
}
