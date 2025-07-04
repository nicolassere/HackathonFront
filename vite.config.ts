import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto hace que use paths relativos
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});