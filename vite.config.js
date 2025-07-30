import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          components: [
            './src/components/AudioPlayer.jsx',
            './src/components/VoiceSampleGrid.jsx',
            './src/components/TrackShowcase.jsx'
          ],
          pages: [
            './src/pages/Home.jsx',
            './src/pages/About.jsx',
            './src/pages/Portfolio.jsx',
            './src/pages/Contact.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  assetsInclude: ['**/*.mp3', '**/*.wav', '**/*.ogg'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js'
  }
})