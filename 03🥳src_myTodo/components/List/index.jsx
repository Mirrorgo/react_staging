import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          /* console.log({ ...todo });
          console.log({ todo });
          //仅用于测试下面的内容中的...todo */
          return (
            <Item
              key={todo.id}
              {...todo} //STAR 这里的...todo用来做什么?拆分出所有属性???貌似是的
              // handleCheckBox={this.props.handleCheckBox}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
