import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'harry-the-bean': resolve(__dirname, 'harry-the-bean/index.html'),
        'the-legend-of-jack-destiny-rising': resolve(__dirname, 'the-legend-of-jack-destiny-rising/index.html'),
        'tic-tac-toe': resolve(__dirname, 'tic-tac-toe/index.html'),
        'jake': resolve(__dirname, 'jake/index.html')
      }
    }
  }
})