import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',


    };
  }

  handleUserNameChange = (event) => {
  let userName = event.target.value
    this.setState({
      username: userName,
      password: this.state.password

    })
  }

  handlePasswordChange = (event) => {
    let password = event.target.value
    this.setState({
      username: this.state.username,
      password: password

    })

  }
  handleSubmit = (event) => {
    event.preventDefault()
    // let username = this.state.username
    // let password = event.target.password
    if (this.state.username && this.state.password)
    return this.props.handleLogin(this.state)

  }


  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} />
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
