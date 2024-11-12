import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ["src/**/*.ts", "src/**/*.tsx"],
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
            external: ["react", "react-dom"],
            output: [
                {
                    format: "es",
                    exports: "named",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                    assetFileNames: "assets/[name][extname]",
                },
                {
                    format: "cjs",
                    exports: "named",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                    assetFileNames: "assets/[name][extname]",
                },
                {
                    format: "umd",
                    name: "taylux",
                    exports: "named",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
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
        exclude: ["react", "react-dom"],
    },
});
