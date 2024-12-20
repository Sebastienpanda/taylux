import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		vue(),
		dts({
			include: ['src/**/*.ts', 'src/**/*.vue'],
			outDir: 'dist/types',
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: (format) => `queo.${format}.js`,
		},
		sourcemap: false,
		minify: true,
		cssCodeSplit: false,
		cssMinify: true,
		rollupOptions: {
			external: ['vue', '@queo/core'],
			output: [
				{
					format: 'es',
					exports: 'named',
					globals: {
						vue: 'Vue',
						'@queo/core': 'QueoCore',
					},
					assetFileNames: 'assets/[name][extname]',
					preserveModulesRoot: 'src',
				},
				{
					format: 'umd',
					name: 'queo',
					exports: 'named',
					globals: {
						vue: 'Vue',
						'@queo/core': 'QueoCore',
					},
					assetFileNames: 'assets/[name][extname]',
				},
			],
		},
		reportCompressedSize: true,
		chunkSizeWarningLimit: 1000,
	},
});
