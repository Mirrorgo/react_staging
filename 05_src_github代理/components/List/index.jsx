import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
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
