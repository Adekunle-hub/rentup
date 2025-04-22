import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  base:"/RentUp",
  build: {
    assetsDir: 'assets',  // Ensures images go to `/dist/assets/`
  }
})
