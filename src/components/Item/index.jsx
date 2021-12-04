import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    const { name } = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    );
  }
}
