const { createProxyMiddleware } = require("http-proxy-middleware");

const baseURL = "https://api.likelionhongik.com/";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: baseURL,
      changeOrigin: true,
    }),
  );
};
