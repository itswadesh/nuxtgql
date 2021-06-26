import { tailwindcss } from './shared/config'
export default {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/proxy'],
  pageTransition: 'slide-bottom',
  layoutTransition: 'slide-bottom',
  tailwindcss,
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
  },
  proxy: {
    '/graphql': 'https://tapi.litekart.in',
    '/api': 'https://tapi.litekart.in',
  },
}
