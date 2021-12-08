import React, { Component } from "react";
import { Outlet } from "react-router";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <Outlet />
        {/* 这里可以多次填写outlet实现重复渲染 */}
        <Outlet />
        <Outlet />
      </div>
    );
  }
}
