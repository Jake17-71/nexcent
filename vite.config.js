import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: 'nexcent',
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})