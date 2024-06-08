import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; 
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import { VitePluginFonts } from 'vite-plugin-fonts'


export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
    VitePluginFonts({
      google: {
        families: [
          'Playfair Display',
          'Pacifico'  
        ],
      }
    })
	],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
      },
    },
    outDir: './dist/dist/',
  },
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_PROXY_URL,
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    },
  },//viteのプロキシ設定でバグが発生するらしいので保留
  resolve: {
    alias: {
      __STATIC__: path.resolve(__dirname, 'static'),
    },
  },
  publicDir: process.env.BASE_URL,
});

