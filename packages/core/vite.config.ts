import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            include: ["src/**/*.ts"],
            outDir: "dist/types",
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "taylux",
            fileName: (format) => `taylux.${format}.js`,
            formats: ["es", "umd", "cjs"],
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    preserveModules: true,
                    preserveModulesRoot: "src",
                    exports: "named",
                    assetFileNames: "assets/[name][extname]",
                },
                {
                    format: "cjs",
                    preserveModules: false,
                    exports: "named",
                    assetFileNames: "assets/[name][extname]",
                },
                {
                    format: "umd",
                    name: "taylux",
                    exports: "named",
                    assetFileNames: "assets/[name][extname]",
                },
            ],
        },
        sourcemap: false,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        reportCompressedSize: true,
        chunkSizeWarningLimit: 1000,
        outDir: "dist",
        assetsDir: "assets",
    },
    optimizeDeps: {
        include: [], // Si tu as des dépendances à bundler
        exclude: [], // Si tu as des dépendances à exclure
    },
});
