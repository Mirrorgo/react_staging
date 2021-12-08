import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Subhome from "./components/Sumhome";
import "./App.css";
export default class App extends Component {
  // updateAppState = (stateObj) => {
  //   this.setState(stateObj);
  // };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
              <Link className="list-group-item" to="/about">
                About
              </Link>
              <Link className="list-group-item" to="/home">
                Home
              </Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/home" element={<Home />}>
                    <Route index element={<Subhome />}></Route>
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
