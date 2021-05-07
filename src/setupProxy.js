const { createProxyMiddleware } = require('http-proxy-middleware');
//http://18.190.159.187:8000
module.exports = function(app) {
  app.use(
    '/brawl',
    createProxyMiddleware({
      target: 'http://18.190.159.187:8000',
      changeOrigin: true,
    })
  );
};
