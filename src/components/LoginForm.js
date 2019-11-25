import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  loginSubmit = event => {
    event.preventDefault();
    if(this.state.username.length === 0 || this.state.password.length === 0){
      // if the username or the password is 0 then return null otherwise submit the form
      return null
    } else {
      this.props.handleLogin(this.state)
      //calling on handleLogin from the App.js
    }
  }

  render() {
    return (
      <form onSubmit={this.loginSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleLogin}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleLogin}/>
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
