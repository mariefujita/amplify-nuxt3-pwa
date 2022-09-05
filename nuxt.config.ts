import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  server: {
    port: 3000,
  },
  publicRuntimeConfig: {
    region: process.env.REGION,
    cognitoIdentityUserPoolId:
      process.env.NODE_ENV !== 'production' ? process.env.COGNITO_IDENTITY_USER_POOL : undefined,
    userPoolId: process.env.NODE_ENV !== 'production' ? process.env.USER_POOLS_ID : undefined,
    userPoolWebClientId: process.env.NODE_ENV !== 'production' ? process.env.USER_POOLS_WEB_CLIENT_ID : undefined,
    cognitoAttr: process.env.COGNITO_ATTRIBUTE,
    cognitoMfaConf: process.env.COGNITO_MFA_CONF,
    cognitoMfaType: process.env.COGNITO_MFA_TYPE,
    cognitoPasswordLength: process.env.COGNITO_PASSWORD_LENGTH,
    appSyncEndPoint: process.env.NODE_ENV !== 'production' ? process.env.APPSYNC_END_POINT : undefined,
    appSyncAuthType: process.env.APPSYNC_AUTH_TYPE,
    appSyncApiKey: process.env.NODE_ENV !== 'production' ? process.env.APPSYNC_API_KEY : undefined,
  },
  privateRuntimeConfig: {
    appSyncApiKey: process.env.APPSYNC_API_KEY,
    cognitoIdentityUserPoolId: process.env.COGNITO_IDENTITY_USER_POOL,
    userPoolId: process.env.USER_POOLS_ID,
    userPoolWebClientId: process.env.USER_POOLS_WEB_CLIENT_ID,
    appSyncEndPoint: process.env.APPSYNC_END_POINT,
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
