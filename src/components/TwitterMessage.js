import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} id="message" />
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
