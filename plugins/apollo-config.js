import { HTTP_ENDPOINT, WWW_URL } from './../config/index'
console.log(
  'zzzzzzzzzzzzzzzzzzzzzzzzzzz apillo config......',
  HTTP_ENDPOINT.replace('http', 'ws'),
  HTTP_ENDPOINT
)
export default (context) => {
  return {
    httpEndpoint: `${WWW_URL}/graphql`,
    browserHttpEndpoint: '/graphql',
    wsEndpoint: `${HTTP_ENDPOINT.replace('http', 'ws')}/graphql`,
  }
}
