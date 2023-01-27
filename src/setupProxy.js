const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
<<<<<<< HEAD
    createProxyMiddleware("/v1/**", {
      target: "http://localhost:8080",
      // target: "http://13.124.126.164:8080",
      // target: "https://accounts.google.com/o/oauth2/v2/auth",
=======
    "/v1/**",
    createProxyMiddleware({
      target: "http://localhost:8080",
>>>>>>> a2408b11462a19c8bcf59504910e0d4f7f0ed8ec
      changeOrigin: true,
    }),
  );
};
