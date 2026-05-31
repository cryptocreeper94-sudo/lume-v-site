import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lume-V Enterprise',
        short_name: 'Lume-V',
        description: 'Validation-as-a-Service',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
      }
    })
  ]
})
