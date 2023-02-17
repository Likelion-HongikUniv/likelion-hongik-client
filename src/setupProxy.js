const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // createProxyMiddleware("/v1/**", {
    //   target: "http://localhost:8080",
    //   // target: "http://13.125.126.164:8080",
    "/v1/**",
    createProxyMiddleware({
      target: "http://13.125.72.138:8080/",
      changeOrigin: true,
    }),
  );
};
