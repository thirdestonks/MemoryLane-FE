// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  runtimeConfig: {
    public: {
      apibaseURL: process.env.API_BASE_URL
    },
  },

  compatibilityDate: '2024-08-06'
})