/// <reference types="@types/node"/>
var child = require('child_process');
var opts = require('./package.json').postinstallOptions;
if (opts == null) { throw new Error('Post install options are non-existent.'); }
var platformDeps = opts[process.platform];

if (platformDeps == null) {
	throw new Error('Sorry, but platform' + process.platform + 'is not supported!');
}

for (var name in platformDeps) {
	child.spawnSync('npm', [
		'install',
		'' + name + '@' + platformDeps[name],
		'--no-save'
	], { cwd: __dirname });
}
