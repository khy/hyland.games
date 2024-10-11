import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'harry-the-bean': resolve(__dirname, 'harry-the-bean/index.html')
      }
    }
  }
})