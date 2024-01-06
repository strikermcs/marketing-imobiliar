// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IMOBILIAR',
      htmlAttrs: {
        lang: 'ro',
      },
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
      meta: [
        { property: 'og:title', content: 'MARKETING IMOBILIAR' },
        { property: 'og:description', content: 'Diferențierea proprietății intr-o piață imobiliara competitivă' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.marketing-imobiliar.ro/' },
        { property: 'og:locale', content: 'ro' },
        { property: 'og:image', content: '/assets/img/promo-bg.jpg' },
      ]
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },

})