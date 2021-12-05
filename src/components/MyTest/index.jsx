import React, { Component } from "react";
import axios from "axios";

export default class index extends Component {
  getStudentData = (params) => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };

  getCarData = (params) => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>这里是链接</h2>
        <button onClick={this.getStudentData}>按钮</button>
        <button onClick={this.getCarData}>按钮2</button>
      </div>
    );
  }
}
