//引入React核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom";
// 引入App
import App from "./App";
// 这种方式可以一劳永逸的把al内容放入BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
