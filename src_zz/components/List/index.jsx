import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
export default class index extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处在加载中
    err: "", //存储错误信息
  };

  componentDidMount() {
    this.token = PubSub.subscribe("Mirrorgo", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {
          // 这里不能直接写js语句,只能写表达式,so判断语句应该使用三元表达式的方式来写
          isFirst ? (
            <h2>欢迎使用gitbub用户搜索,点击关键字,随后搜索</h2>
          ) : isLoading ? (
            <h2>Loading...</h2>
          ) : err ? (
            <h2 style={{ color: "red" }}>{err}</h2>
          ) : (
            users.map((userObj) => {
              return (
                <div key={userObj.id} className="card">
                  <a href={userObj.html_url}>
                    <img
                      src={userObj.avatar_url}
                      alt="head_poryrait"
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className="card-text">{userObj.login}</p>
                </div>
              );
            })
          )
        }
      </div>
    );
  }
}
