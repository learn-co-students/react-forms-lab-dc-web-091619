import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  writeTweet = (event) =>{
    let content = event.target.value
    this.setState({tweet: content})
  }

  count = (tweetlength) => {
    return (this.props.maxChars) - (tweetlength)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange = {this.writeTweet} value = {this.state.tweet}/>
        <p>Character Counter: {this.count(this.state.tweet.length)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
