const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}


module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});