import React from "react";

class TwitterMessage extends React.Component {
  
 state = {
  message:"",
  chars:this.props.maxChars
};

  handleTwitChange = (event) => {
    let newChars = 280;

    if (event.target.value.length === 0) {
      newChars = 280
    } else {
      newChars = newChars - event.target.value.length;
    }

    this.setState({
      [event.target.name]:event.target.value,
      chars: newChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleTwitChange} />
        <div>Remaining chars: {this.state.chars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
