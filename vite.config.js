import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hackcmu2026/',
  plugins: [react()],
  server: {
    allowedHosts: [
      "sedation-persecute-amiss.ngrok-free.dev"
    ]
  }
})
