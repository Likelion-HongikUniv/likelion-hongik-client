const { createProxyMiddleware } = require("http-proxy-middleware");

const baseURL = "http://13.124.126.164:8080";
const baseURL2 = "http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/**", {
      target: baseURL,
      changeOrigin: true,
    }),
  );
};
