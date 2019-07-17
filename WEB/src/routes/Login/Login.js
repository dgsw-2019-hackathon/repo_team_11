import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';

class Login extends Component {
  state = {
    userId: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    const {
      userId: id,
      password: pw
    } = this.state;
    await axios.post('http://192.168.137.1:7777/auth/login', {
      id,
      pw,
    })
      .then((res) => {
        localStorage.setItem(
          "userInfo",
          res.data.token
        );
        localStorage.setItem(
          "memberId",
          id
        );
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <div className="logo">
        </div>
        <div className="loginForm">
          <input type="text"
            name="userId"
            placeholder="아이디"
            value={
              this.state.userId
            }
            onChange={
              this.handleChange
            }
            className="userId"
          />
          <input type="password"
            name="password"
            placeholder="비밀번호"
            value={
              this.state.password
            }
            onChange={
              this.handleChange
            }
            className="password"
          />
          <button
            onClick={
              this.handleSubmit
            }> 로그인</button>
          <button>
            회원가입
          </button>
        </div>
      </div>
    );
  }
}

export default Login;