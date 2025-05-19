import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './demo',
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 5173,
  }
});