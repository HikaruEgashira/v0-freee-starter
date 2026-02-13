import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readdirSync } from 'fs'

const blocksDir = path.resolve(__dirname, 'src/blocks')
const blocks = readdirSync(blocksDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const blockEntries = blocks.reduce((entries, blockName) => {
  entries[`demo-${blockName}`] = path.resolve(blocksDir, blockName, 'demo.html')
  return entries
}, {} as Record<string, string>)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: './postcss.config.mjs',
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        ...blockEntries,
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
