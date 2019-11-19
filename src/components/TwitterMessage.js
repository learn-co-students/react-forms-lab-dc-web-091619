import React from "react";

class TwitterMessage extends React.Component {
  
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  handleChangeEvent = (event) => {
    //console.log('this is the target:', event.target)
    //console.log('this is the counter? or length?', event.target.value.length) //the length will be however long the string is and that will be subtracted from the maxChars that was passed in through the app.js

    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    //console.log(this.props.maxChars)
    
    return (
      <div>
        <strong>Your message: </strong>
        <input type="text" onChange={event => this.handleChangeEvent(event)} name="message" id="message" value={this.state.inputValue}/>
        {this.props.maxChars - this.state.inputValue.length}
      </div>
    );
  }
}

export default TwitterMessage;
