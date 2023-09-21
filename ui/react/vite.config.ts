import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        reactScopedCssPlugin(),
    ],
    optimizeDeps: {
        exclude: ['stories'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'DocumateUIReact',
            formats: ['es', 'umd'],
            fileName: (format) => `documate-ui-react.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});