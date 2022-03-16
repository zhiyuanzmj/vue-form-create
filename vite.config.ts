import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    include: ['element-plus', 'wangeditor', 'vuedraggable']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-form-create'
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'element-plus', 'vuedraggable', 'wangeditor'],
      output: {
        globals: {
          vue: 'Vue'
          // 'element-plus': 'elementPlus'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[name]'
    })
  ]
})
