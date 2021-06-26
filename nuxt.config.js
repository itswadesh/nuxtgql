export default {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
  modules: ['@nuxtjs/proxy'],
  pageTransition: 'slide-bottom',
  layoutTransition: 'slide-bottom',
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
