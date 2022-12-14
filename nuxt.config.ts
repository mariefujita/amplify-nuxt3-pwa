import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  server: {
    port: 3000,
  },
  modules: ['@nuxtjs/color-mode', '@kevinmarrec/nuxt-pwa'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
      // https://github.com/nuxt/framework/issues/4916
      // 'window.global': {}, // ← yarn dev するときはコメントアウトを外す
    },
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      },
    },
  },
  pwa: {
    meta: {
      mobileAppIOS: true,
      lang: 'ja',
    },
    manifest: {
      lang: 'ja',
      name: 'Amplify with Nuxt SSG & PWA',
      short_name: 'Amplify/SSG',
      display: 'standalone',
      background_color: '#111827',
      theme_color: '#3B82F6',
    },
    workbox: {
      enabled: false,
    },
  },
})
