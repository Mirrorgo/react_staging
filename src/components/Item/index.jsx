import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  handleCheckBox = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
      // console.log(this.props);
    };
  };

  handleDeleteTodo = (id) => {
    return (event) => {
      this.props.deleteTodo(id);
    };
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheckBox(id)}
          />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleDeleteTodo(id)}>
          删除
        </button>
      </li>
    );
  }
}
