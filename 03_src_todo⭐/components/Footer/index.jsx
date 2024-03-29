import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handleClearAllDone = (params) => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    // 已完成个数
    const doneCount = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
    // console.log(doneCount);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
