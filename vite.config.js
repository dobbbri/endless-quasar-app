import { fileURLToPath, URL } from 'url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/assets/scss/variables.scss'
    }),

    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router', 'pinia', 'quasar'],
      dts: 'src/auto-imports.d.ts'
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts'
    })
  ],

  resolve: {
    alias: {
      'src': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    port: 8080
  }
})
