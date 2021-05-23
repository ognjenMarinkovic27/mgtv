const withPWA = require('next-pwa')
const runtimeCaching =  require('next-pwa/cache')

module.exports = withPWA({
    images: {
      domains: ['i.ytimg.com', 'www.mg.edu.rs', 'firebasestorage.googleapis.com'],
    },
    pwa: {
      dest: 'public',
      runtimeCaching
    }
  })