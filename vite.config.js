import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    environment: 'jsdom',     // needed for React Testing Library
    globals: true,            // so you can use `test()` without importing
    setupFiles: './src/Counter.test.jsx'
  }
})
