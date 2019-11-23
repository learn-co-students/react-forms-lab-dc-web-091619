import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleMessage = (event) => {
    // let newMaxChars = 280 - this.state.message.length
    // this doesnt work.
    let newMaxChars = 280 - event.target.value.length
    this.setState({
      message: event.target.value,
      maxChars: newMaxChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage}
        />
        <h5>Characters Left: {this.state.maxChars}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
