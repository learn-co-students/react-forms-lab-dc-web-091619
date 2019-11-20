import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      remainingChars: 280
    };
  }

  handleForm = event => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={event => this.handleForm(event)} />
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
