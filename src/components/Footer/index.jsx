import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((acc, cur) => {
      return acc + (cur.done === true ? 1 : 0);
    }, 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
