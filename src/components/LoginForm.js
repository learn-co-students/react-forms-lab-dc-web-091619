import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
      //its a key value so as long as the event.target.name is the same
      //as the state key value it will be able to update 
      //with no problems. Input name MUST be the same
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // if (!this.state.username || !this.state.password) return
    // this.props.handleLogin(this.state)
    //need to add a debugger to find out why if state is not working

    if(this.state.username.length === 0 || this.state.password.length === 0){
      return null
    } else {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    //console.log(this.props.handleLogin) //this is the function that was passed in from App.js
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={event => this.handleChange(event)}
            value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange={event => this.handleChange(event)}
            value={this.state.password} />
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
