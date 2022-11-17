const { createProxyMiddleware } = require('http-proxy-middleware');

// const version = "v1";

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        // '^/api': `/api/${version}/`, // rewrite path
        '^/api': `/`, // rewrite path
      },
    })
  );
};