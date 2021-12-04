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
1.显示多个item ✅
2.悬浮变色
3.回车添加内容为Item ✅
4.统计完成的数目✅
5.选定/取消勾选改变item的state✅
6.全选state
7.删除item
8.删除已完成的item
 */

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "打代码", done: true },
      { id: "003", name: "睡觉", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodo = [todoObj, ...todos];
    this.setState({ todos: newTodo });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodo = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodo });
  };

  updateTodo = (id, done) => {
    //TODO:如何将输入改为todo对象的所有属性
    const { todos } = this.state;
    const newTodo = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodo });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo}></List>
          <Footer todos={todos}></Footer>
        </div>
      </div>
    );
  }
}
