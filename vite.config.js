import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.ts',
      template: 'index.html',
      inject: {
        data: {
          title: 'Vite App',
        },
        tags: [
          {
            injectTo: 'head',
            tag: 'script',
            attrs: {
              src: './pixel.js' // Caminho para o arquivo com o código do pixel
            }
          }
        ]
      }
    })
  ],
})