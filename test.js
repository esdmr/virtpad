const { getDriver } = require('./virtpad/build/main');
const { default: xbox360 } = require('./virtpad/build/configs/xbox360');
const { Key, Abs } = require('./virtpad-shared/build/main');
const sleep = require('util').promisify(setTimeout);

async function main () {
	const config = xbox360();
	const Driver = await getDriver();
	const driver = new Driver(config);
	await driver.start();

	const testKey = async (key) => {
		driver.sendKey(key, 1);
		await sleep(500);
		driver.sendKey(key, 0);
		await sleep(100);
	}

	const testAbs = async (abs) => {
		const max = config.abs[abs][1];
		for (let c = config.abs[abs][0]; c <= max; c++) {
			await driver.sendAbs(abs, c);
			await sleep(100);
		}

		driver.sendAbs(abs, 0);
		await sleep(100);
	}

	await sleep(10e3);

	// await testKey(Key.A);
	// await testKey(Key.B);
	// await testKey(Key.X);
	// await testKey(Key.Y);
	// await testKey(Key.L1);
	// await testKey(Key.R1);
	// await testKey(Key.L3);
	// await testKey(Key.R3);
	// await testKey(Key.START);
	// await testKey(Key.SELECT);
	// await testKey(Key.HOME);
	await testAbs(Abs.LX);
	await testAbs(Abs.LY);

	await sleep(120e3);
	driver.stop();
}

main().catch(console.error);
