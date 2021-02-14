const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
  future: { webpack5: true }
})
