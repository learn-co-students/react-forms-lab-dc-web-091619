import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    if (this.state.password.length > 0 && this.state.username.length > 0) {
    this.props.handleLogin(this.state) }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.props.username} onChange={this.inputHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.props.password} onChange={this.inputHandler} />
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
