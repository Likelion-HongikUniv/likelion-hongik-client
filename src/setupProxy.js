const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: "http://13.124.126.164:8080",
      changeOrigin: true,
    }),
  );
};
