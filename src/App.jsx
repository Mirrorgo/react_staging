import React, { Component } from "react";
import { Button, Calendar } from "antd";
import { GithubOutlined, GitlabOutlined } from "@ant-design/icons";
import './App.less'

export default class App extends Component {
  render() {
    function onPanelChange(value, mode) {
      console.log(value.format("YYYY-MM-DD"), mode);
    }
    return (
      <div>
        App...
        <Button type="primary">点击</Button>
        <Button type="link">点击</Button>
        <GithubOutlined />
        <GitlabOutlined />
        <Calendar onPanelChange={onPanelChange} />
      </div>
    );
  }
}
