export default function () {
  return {
    logoutEndpoint: '',
    refreshTokenEndpoint: '',
    registerEndpoint: '',
    isAuthenticated: false,
    accessToken: '',

    //
    // ─── STATUS PROPERTIES ──────────────────────────────────────────────────────────
    //

    isRegisteringUser: false,
    isLoggingOutUser: false,
    isRefreshingToken: false,

    //
    // ─── ERROR PROPERTIES ───────────────────────────────────────────────────────────
    //

    errorRegisteringUser: null,
    errorLoggingOutUser: null,
    errorRefreshingToken: null
  }
}
