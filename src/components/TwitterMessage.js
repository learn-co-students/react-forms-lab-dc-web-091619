import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (event) => {
    this.setState( {
      message: event.target.value
    } )
  }

  showRemainingCharcters = () => {
    let charCount = this.state.message.length
    return this.props.maxChars - charCount
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
          onChange={ (event) => this.updateMessage(event)}
        />

        <div id="charsRemaing">
          Characters left: {this.showRemainingCharcters()}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
