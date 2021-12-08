const proxy = require("http-proxy-middleware"); //react自带的一个中间件

module.exports = function (app) {
  app.use(
    proxy("/api1", {
      //遇见/api1前缀的请求,就会触发该代理装置👇
      target: "http://localhost:5000",
      changeOrigin: true, //控制服务器收到的响应头中Host字段的值,也就是这个请求时哪里发出的
      pathRewrite: { "^/api1": "" }, //重写请求路径(不可缺)
    })
  );
};
