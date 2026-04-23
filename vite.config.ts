// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // 👈 esto asegura que /assets/... se genere como ./assets/...
  server: {
    allowedHosts: true,
  },
})
