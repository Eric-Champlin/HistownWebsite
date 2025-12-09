import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Browser compatibility target
    target: ['es2020', 'edge90', 'firefox88', 'chrome90', 'safari14'],
    // Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
})