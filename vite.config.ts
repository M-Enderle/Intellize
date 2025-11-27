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
      },
      plugins: [
        { enforce: 'pre', ...mdx() },
        react(), 
        imagetools()
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
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
      },
    };
});
