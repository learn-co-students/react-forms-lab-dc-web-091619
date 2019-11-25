import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageContent: ''
    };
  }

  newMessage = event => {
    const newMsg = event.target.value;
    this.setState({
      messageContent: newMsg
    })
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.newMessage} value={this.state.messageContent}/>
        <p>{this.props.maxChars - this.state.messageContent.length} left</p>
        {/*grab the maxChar number assigned as props in the App.js and subtract the number of characters in messageContent
        by its length to show the remaining number of characters*/}
      </div>
    );
  }
}

export default TwitterMessage;
