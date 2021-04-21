const path = require('path');

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  open: true,
  optimizeDeps: {
    include: ["swiper/vue"],
  },
  base:'./profile/'
  
}