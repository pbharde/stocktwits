const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/symbol',
    createProxyMiddleware({
      target: 'https://api.stocktwits.com/api/2/streams',
      secure: false,
      changeOrigin: true,
    })
  );
};
