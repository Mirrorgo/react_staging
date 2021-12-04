import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos, updateTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo} //TODO 这里的todo用来做什么?接受所有属性???
              // handleCheckBox={this.props.handleCheckBox}
              updateTodo={updateTodo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
