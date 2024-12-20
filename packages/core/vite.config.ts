import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			include: ['src/**/*.ts'],
			outDir: 'dist/types',
			beforeWriteFile: (filePath, content) => {
				if (content.trim() === '') {
					return false;
				}
				return { filePath, content };
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'QueoCore',
			fileName: 'index',
			formats: ['es'],
		},
		sourcemap: false,
		minify: true,
		cssMinify: true,
		cssCodeSplit: false,
	},
});
