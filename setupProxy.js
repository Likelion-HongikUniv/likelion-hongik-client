const { createProxyMiddleware } = require("http-proxy-middleware");

const baseURL = "https://www.hongiklikelion.click/";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: baseURL,
      changeOrigin: true,
    }),
  );
};
