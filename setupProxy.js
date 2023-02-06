const { createProxyMiddleware } = require("http-proxy-middleware");

const baseURL = "http://13.125.72.138:8080";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: baseURL,
      changeOrigin: true,
    }),
  );
};
