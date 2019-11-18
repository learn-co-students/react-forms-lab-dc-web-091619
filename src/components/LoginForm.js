import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username:"",
    password:""
};

  updateState = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  loginChecker = (e) => {
    e.preventDefault()
    let password = this.state.password;
    let username = this.state.username;
    if (username && password) {
      this.props.handleLogin({username,password})
    }
  }

  render() {
    return (
      <form onSubmit={this.loginChecker}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateState} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updateState} value={this.state.password} />
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
