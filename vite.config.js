import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio-React-Vite/',   // ✅ repo name
  build: {
    outDir: 'docs',                 // 👈 build output will go to docs/
  },
})
