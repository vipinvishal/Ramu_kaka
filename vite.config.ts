
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: 'GEMINI_',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
