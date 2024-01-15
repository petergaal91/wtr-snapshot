import { chromeLauncher } from '@web/test-runner';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
	nodeResolve: true,
	files: '**/*.spec.ts',
	plugins: [
		esbuildPlugin({
			ts: true,
			tsconfig: './tsconfig.json',
		}),
		visualRegressionPlugin({
			baseDir: './screenshots',
			failureThreshold: 1,
			failureThresholdType: 'percent',
		}),
	],
	browsers: [chromeLauncher()],
	filterBrowserLogs(log) {
		const filteredLogs = ['Lit is in dev mode'];

		for (const arg of log.args) {
			if (typeof arg === 'string' && filteredLogs.some((l) => arg.includes(l))) {
				return false;
			}
		}

		return true;
	},
};
