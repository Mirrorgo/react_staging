import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

// TODO
/* 
header: 回车将输入的内容添加为item
list:容器
  item:悬浮变色,点击删除,选择框点击
footer:统计item,完成数
 */

// TODO
/* 
1.显示多个item
2.悬浮变色
3.回车添加内容为Item
 */

export default class App extends Component {
  state = {
    todos: [
      { id: "oo1", name: "吃饭", done: true },
      { id: "oo2", name: "打代码", done: true },
      { id: "oo3", name: "睡觉", done: true },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <List todos={todos}></List>
          <Footer todos={todos}></Footer>
        </div>
      </div>
    );
  }
}
