import * as types from './mutation_types'

export default {

  //
  // ─── REGISTER USER ───────────────────────────────────────────────────────────
  //

  [types.REQUEST_REGISTER_USER]: (state) => {
    state.isRegisteringUser = true
  },
  [types.RECEIVE_REGISTER_USER_SUCCESS]: (state, data) => {
    state.isAuthenticated = data.isAuthenticated
    state.errorRegisteringUser = null
    state.isRegisteringUser = false
  },
  [types.REQUEST_REGISTER_USER_ERROR]: (state, error) => {
    state.errorRegisteringUser = error
    state.isRegisteringUser = false
  },

  //
  // ─── LOGOUT USER ───────────────────────────────────────────────────────────
  //

  [types.REQUEST_LOGOUT_USER]: (state, rootState) => {
    state.isLoggingOutUser = true
    state.isAuthenticated = false
    state.accessToken = ''
    state.errorLoggingOutUser = null
    state.isLoggingOutUser = false
  },

  //
  // ─── REFRESH TOKEN ───────────────────────────────────────────────────────────
  //

  [types.REFRESH_TOKEN]: (state) => {
    state.isRefreshingToken = true
  },
  [types.REFRESH_TOKEN_SUCCESS]: (state, data) => {
    state.isAuthenticated = data.isAuthenticated
    state.accessToken = data.accessToken
    state.errorRefreshingToken = null
    state.isRefreshingToken = false
  },
  [types.REFRESH_TOKEN_ERROR]: (state, error) => {
    state.errorRefreshingToken = error
    state.isRefreshingToken = false
  },
}
