import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/darcyg32.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}) 