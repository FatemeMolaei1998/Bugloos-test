import * as types from './mutation_types'
import { api } from 'boot/axios'
import { getCookie } from 'assets/js/Utils'

// Commented Codes are on a purpose
// so you can see how the code would be if there was a real server


//
// ─── REGISTER USER ────────────────────────────────────────────────────────────
//

// export const requestRegisterUser = ({ commit }) =>
//   commit(types.REQUEST_REGISTER_USER)

export const receiveRegisterUserSuccess = ({ commit }, data) =>
  commit(types.RECEIVE_REGISTER_USER_SUCCESS, data)

// export const requestRegisterUserError = ({ commit }, error) =>
//   commit(types.REQUEST_REGISTER_USER_ERROR, error)

export const registerUser = ({ state, dispatch }, data) => {

  // return new Promise((resolve, reject) => {
  //   dispatch('requestRegisterUser')
  //   api
  //     .patch(`${state.registerEndpoint}`, data)
  //     .then((response) => {
  //       dispatch('receiveRegisterUserSuccess', response.data)
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       dispatch('requestRegisterUserError', error)
  //       reject(error ? (error.response ? error.response.data : error) : error)
  //     })
  // })

  document.cookie = '_rftk=' + data.email + '; SameSite=Lax; path=/'
  dispatch('receiveRegisterUserSuccess', { isAuthenticated: true })
}

//
// ─── LOG OUT USER ────────────────────────────────────────────────────────────
//

export const requestLogoutUser = ({ commit }, data) =>
  commit(types.REQUEST_LOGOUT_USER, data)

export const logoutUser = ({ state, rootState, dispatch }) => {
  document.cookie = "_rftk=''; SameSite=Lax; path=/"
  dispatch('requestLogoutUser', rootState)
}

//
// ─── REFRESH TOKEN ───────────────────────────────────────────────────────────
//

export const refreshToken = ({ commit }) => commit(types.REFRESH_TOKEN)

export const refreshTokenSuccess = ({ commit }, data) =>
  commit(types.REFRESH_TOKEN_SUCCESS, data)

export const refreshTokenError = ({ commit }, error) =>
  commit(types.REFRESH_TOKEN_ERROR, error)

export const getNewAccessToken = ({ state, dispatch }) => {
  dispatch('refreshToken')
  return new Promise((resolve, reject) => {
    dispatch('refreshToken')
    const refreshToken = getCookie('_rftk')

    // api
    //   .post(`${state.refreshTokenEndpoint}`, { refresh: refreshToken })
    //   .then((response) => {
    //     const token = response.data ? response.data : { access: '', refresh: '' }
    //     const allowAuthenticate = !!(token.access)
    //     dispatch('refreshTokenSuccess', {
    //       accessToken: token.access,
    //       isAuthenticated: allowAuthenticate
    //     })
    //     api.defaults.headers.common.Authorization = 'Bearer ' + token.access
    //     resolve(response)
    //   })
    //   .catch((error) => {
    //     dispatch('refreshTokenError', error)
    //     reject(error ? (error.response ? error.response.data : error) : error)
    //   })

    if (refreshToken) {
      dispatch('refreshTokenSuccess', { isAuthenticated: true })
    }
    else {
      dispatch('refreshTokenError', { isAuthenticated: false })
    }
  })
}
