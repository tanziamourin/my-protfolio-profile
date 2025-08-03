import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   optimizeDeps: {
    include: [
      'react-router-dom',
      'react-dom',
      'react',
      'axios',
      'react-hook-form',
      'sweetalert2',
      'react-icons',
      
    ],
  },
})
