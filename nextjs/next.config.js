module.exports = {
  env: {
    LOGIN_URL: process.env.NEXT_PUBLIC_BASE_URL + '/login',
    LOGOUT_URL: process.env.NEXT_PUBLIC_BASE_URL + '/logout',
    CSRF_COOKIE_URL: process.env.NEXT_PUBLIC_BASE_URL + '/sanctum/csrf-cookie',
    BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL + '/api/v1',
  },
}
