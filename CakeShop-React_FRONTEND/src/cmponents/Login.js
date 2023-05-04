import React, { Component } from "react";
import "../cascading/Login.css";
import "../cascading/formstyle.css";
import Navbar from "./navbar";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      email: "",
      password: "",
    };
  }
  checkLogin = (event) => {
    console.log("ckeck runs");
    // // console.log(event, "'hi");
    event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    const logdata = { uid: email, pwd: password };
    console.log(JSON.stringify(logdata));
    const url = `http://localhost:8087/userLogin`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(logdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status === "SUCCESS") {
          if (data?.username === "customer") {
            return this.props.history.push(`/viewcakestableUser/${email}`);
          }
          if (data?.username === "admin") {
            return this.props.history.push(`/adminhome/${email}`);
          }
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => console.log("err"));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div class="p-2 mb-2 bg-white text-dark ">
          <h1 style={{ textAlign: "center" }}>Please Login </h1>
        </div>
        <div className="container">
          <body className="text-center fullpage">
            <main className="form-signin">
              <form onSubmit={this.checkLogin} className="loginstyle">
                <img
                  className="mb-4"
                  src="./image/logo.png"
                  alt="logo"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "50%" }}
                />

                <div className="form-floating">
                  <label for="floatingInput">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    ref="email"
                    id="floatingInput"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-floating">
                  <label for="floatingPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    ref="password"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                </div>

                {/* <form action="/adminhome"> */}
                <button
                  className="w-100 btn btn-lg btn-primary login"
                  type="submit"
                >
                  Login
                </button>
                {/* </form> */}
                <form action="/register">
                  <button
                    className="w-100 btn btn-lg btn-primary register"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </form>
            </main>
          </body>
          <br />
          <p>{this.state.msg}</p>
        </div>
      </div>
    );
  }
}
export default Login;
