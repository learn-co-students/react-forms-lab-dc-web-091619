import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageContent: ""
    };
  }

  setmessage = (event) => {
    const newMessage = event.target.value
    console.log(newMessage)
    this.setState({
      messageContent: newMessage
    })
  }

  render() {
      return (
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message"
          onChange={this.setmessage} value={this.state.messageContent}/>
          <p>{this.props.maxChars - this.state.messageContent.length} left</p>
        </div>
      )
  }
}

export default TwitterMessage;
