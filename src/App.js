// 创建"外壳"组件App
import React, { Component } from "react"; //这个{}是因为react中用了多种暴露方式
import Hello from "./components/Hello/Hello"; //这种写法在引入的时候写得少,但是开多个tab写文档的时候会分不清是哪个组件的index文件
import Welcome from "./components/Welcome/Welcome";

// 注意:请用less而不是css写样式以避免样式冲突

// 用默认暴露的方式创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello /> <Welcome />
      </div>
    );
  }
}
