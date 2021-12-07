import React, { Component } from "react";
import axios from "axios";

export default class index extends Component {
  // myRef = React.createRef();

  search = () => {
    // console.log(event.target.va)
    // this.myRef.current.focus();
    // console.log(this.myRef.current.value);
    // console.log(this);
    // console.log(this.keyWordElement.value);
    const {
      keyWordElement: { value: keyWord },
    } = this;
    console.log(keyWord);
    // 👇这里没有产生跨域问题是因为后端用cors解决了跨域问题
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        console.log("成功", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            // ref={this.myRef}
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
