import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  server: {
    port: 3000,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@kevinmarrec/nuxt-pwa',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
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
      'window.global': {}, // ← yarn dev するときはコメントアウトを外す
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
      name: 'Amplify with Nuxt SSR & PWA',
      short_name: 'Amplify/SSR',
      display: 'standalone',
      background_color: '#111827',
      theme_color: '#3B82F6',
    },
    workbox: {
      enabled: true,
    },
  },
})
