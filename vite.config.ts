import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { imagetools } from 'vite-imagetools';

export default defineConfig(({ mode, isSsrBuild }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        allowedHosts: ["www.intellize.de", "intellize.de"],
        host: '0.0.0.0',
        middlewareMode: true,
      },
      plugins: [
        imagetools(),
        { enforce: 'pre', ...mdx() },
        react(), 
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          'react-router-dom/server': path.resolve(__dirname, './node_modules/react-router-dom/server.mjs'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: isSsrBuild ? undefined : {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
              animation: ['framer-motion'],
            },
          },
        },
      },
      ssr: {
        noExternal: ['react-router-dom', 'react-router'],
        external: [],
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
      },
    };
});
