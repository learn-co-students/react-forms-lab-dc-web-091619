import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }; 
  }

  updateLoginInfo = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginSubmitted = (event) => {
      event.preventDefault();
      if (this.state.username.length !== 0 && this.state.password.length !== 0) {
        return this.props.handleLogin(this.state)
      } else {
        console.log("not valid login input")
      }
  }

  render() {
    return (
      <form onSubmit={this.loginSubmitted}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.updateLoginInfo} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.updateLoginInfo} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
