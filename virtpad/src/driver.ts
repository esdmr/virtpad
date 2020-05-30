import { GenericDriverClass } from 'virtpad-shared';

export async function getDriver (): Promise<GenericDriverClass> {
	// TODO: Include more drivers.
	const { default: UInput } = await import('virtpad-uinput');
	return UInput;
}
