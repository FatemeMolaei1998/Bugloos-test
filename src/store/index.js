import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from './modules/Auth'
import user from './modules/User'

// const token = localStorage.getItem("factor_token");
// var tokenExpirationDate = localStorage.getItem("expires_in");
// var diff;
// if (tokenExpirationDate !== undefined && tokenExpirationDate !== null) {
//   var now = new Date();
//   diff = now - new Date(tokenExpirationDate);
// }
// if (token && diff < 0) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] =
//     "bearer " + token;
// }

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      user
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  // if we want some HMR magic for it, we handle
  // the hot update like below. Notice we guard this
  // code with "process.env.DEV" -- so this doesn't
  // get into our production build (and it shouldn't).
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./modules/Auth'], () => {
      const newAuth = require('./modules/Auth').default
      store.hotUpdate({ modules: { auth: newAuth } })
    })

    module.hot.accept(['./modules/User'], () => {
      const newUser = require('./modules/User').default
      store.hotUpdate({ modules: { user: newUser } })
    })
  }
  return Store
})
