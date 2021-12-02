import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return (params) => {
      this.setState({ mouse: flag });
    };
  };
  // 勾选的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除一个todo的回调
  handleDelete = (id) => {
    // console.log("通知App删除", id);
    return (params) => {
      if (window.confirm("确定删除吗?")) this.props.deleteTodo(id);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "gray" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          // FIXME onClick={() => this.handleDelete(id)}
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
