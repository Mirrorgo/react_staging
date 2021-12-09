import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  /* checkAll = (done) => {
    const { todos ,updateTodo} = this.props;
    // return console.log(todos[0]);
    return todos.map((params) => { 👈   ⭐⭐⭐⭐⭐
      // 貌似不太适合
    })
  }; */

  // STAR
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked);
  };

  handleDeleteAllDone = () => {
    if (window.confirm("你确定删除所有已完成任务吗"))
      this.props.deleteAllDone();
  };

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((acc, cur) => {
      return acc + (cur.done === true ? 1 : 0);
    }, 0);
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
        <button className="btn btn-danger" onClick={this.handleDeleteAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
