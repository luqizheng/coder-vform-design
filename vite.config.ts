import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()
    ,
  vueJsx(),
  createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [resolve(process.cwd(), 'lib/icons/svg')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  })],

  resolve: {
    alias: {
      "@": resolve(__dirname, 'lib')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index"),
      name: "coder-vform-designer",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "@element-plus/icons-vue",
        "@ant-design/icons-vue",
        "ant-design-vue",
        "coder-member-components-vue3",
        "element-plus",
        "crypto-js",
        "vue-router",
        "axios",
        "coder-vform-render",
        "coder-vform-element-plus",
        "clipboard", "mitt",
        "vuedraggable-es",
        "file-saver",
        "v-drag"
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
