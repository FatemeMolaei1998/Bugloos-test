import { boot } from 'quasar/wrappers'
import axios from 'axios'
import URL from '../../../../../Desktop/staff_management_front/src/assets/js/URLConfig'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: URL.baseURL })

export default boot(({ app, router, store, Vue }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  api.interceptors.response.use(function (response) {
    if (response.headers['content-type'] === 'text/html') {
      if (router) {
        router.go(router.currentRoute.value.fullPath)
      } else {
        router.go('/')
      }
      return Promise.reject()
    } else {
      return response
    }
  }, function (error) {
    if (error && error.response && error.response.status === 401) {
      store.dispatch('auth/logoutUser')
      if (router && router.currentRoute.value.fullPath !== '/') {
        router.push('/')
      }
      return Promise.reject(error)
    }
    if (error && error.response && error.response.status >= 500) {
      // router.push('/server-error')
    } else {
      return Promise.reject(error)
    }
  })

  app.config.globalProperties.$api = api

  app.config.globalProperties.$api.defaults.headers.common['Accept-Language'] = 'fa'
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
