import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/lume-v/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cacheId: 'lume-v-v3',
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
      },
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
