import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: " ",
      charRemaining: 280


    };
  }

handleOnChange = (event) => {
// debugger
 let userInput = event.target.value
  let charRemaining = this.props.maxChars - userInput.length

  this.setState({
    userInput: userInput,
    charRemaining: charRemaining,

  })
}



  render() {
    return (
      <div>
        <h1> {this.state.charRemaining} Characters Remaining</h1>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.userInput}  onChange={this.handleOnChange} />
      </div>
    );
  }
}

export default TwitterMessage;
