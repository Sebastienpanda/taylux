import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ["src/**/*.ts", "src/**/*.vue"],
            outDir: "dist/types",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "taylux",
            fileName: (format) => `taylux.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: [
                {
                    format: "es",
                    //preserveModules: true,
                    exports: "named",
                    globals: {
                        vue: "Vue",
                    },
                    assetFileNames: "assets/[name][extname]",
                    preserveModulesRoot: "src",
                },
                {
                    format: "cjs",
                    exports: "named",
                    globals: {
                        vue: "Vue",
                    },
                    assetFileNames: "assets/[name][extname]",
                },
                {
                    format: "umd",
                    name: "tailux",
                    exports: "named",
                    globals: {
                        vue: "Vue",
                    },
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
    },
    optimizeDeps: {
        exclude: ["vue"],
    },
});
