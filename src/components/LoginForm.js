import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  user = (event) => {
    let username = event.target.value
    this.setState({username: username})
  }

  password = (event) => {
    let password = event.target.value
    this.setState({password: password})
  }

  submit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return 
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange = {this.user} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.password} value={this.state.password}/>
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
