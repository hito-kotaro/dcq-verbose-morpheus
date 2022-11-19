// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  server: {
    open: true,
    hmr: {
      host: '192.168.0.12',
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [svgr(), react()],
})
