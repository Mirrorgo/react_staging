import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class index extends Component {
  // const {addTodo} = this.props
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value === "") return; //FIXME 空格的输入也应该排除掉
    // if (target.value)
    const todoObj = { id: nanoid(), name: target.value, done: false };
    // addTodo(todoObj);
    this.props.addTodo(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
