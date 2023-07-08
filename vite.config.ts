import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), tsconfigPaths()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] },
	resolve: {
		alias: {
			$data: path.resolve(__dirname, 'src/data')
		}
	}
});
