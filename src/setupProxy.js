const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/brawl',
    createProxyMiddleware({
      target: 'http://18.190.159.187:8000',
      changeOrigin: true,
    })
  );
};
