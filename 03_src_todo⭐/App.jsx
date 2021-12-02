import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
  };

  // addTodo用于添加一个todo,接受的参数是todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state;
    //追加一个todo
    const newTodo = [todoObj, ...todos];
    // 更新状态
    this.setState({ todos: newTodo });
  };

  //用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state;
    // 匹配数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  // 删除一个todo
  deleteTodo = (id) => {
    // 获取原来的todos
    const { todos } = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    // 更新状态
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };

  clearAllDone = (params) => {
    const { todos } = this.state;

    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          ></List>
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          ></Footer>
        </div>
      </div>
    );
  }
}
