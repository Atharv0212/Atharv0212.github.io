import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative asset paths so the build works at username.github.io/<repo>/ as well as a custom domain.
  base: './',
  plugins: [react(), tailwindcss()],
});
