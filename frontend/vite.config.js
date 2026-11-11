import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  server: {
    // In development, forward API calls to the Laravel backend (php artisan serve).
    // Run the backend with: php artisan serve --port=8077 (port 8000 is used by another app).
    proxy: {
      '/api': process.env.API_PROXY || 'http://localhost:8077',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
