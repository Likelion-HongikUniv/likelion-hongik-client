const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: "http://localhost:8080",
      // target: "http://13.124.126.164:8080",
      // target: "https://accounts.google.com/o/oauth2/v2/auth",
      changeOrigin: true,
    }),
  );
};
