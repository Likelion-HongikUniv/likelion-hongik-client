const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
      "/v1/**",
      createProxyMiddleware({
        // target: "http://localhost:8080",
      target: "http://13.125.72.138:8080/",
      changeOrigin: true,
    }),
  );
};
