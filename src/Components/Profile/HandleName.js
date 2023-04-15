import React, { Component } from 'react';
class HandleName extends Component {
    handleEvent = () => {
      alert(`${item.name}`);
    };
  
    render() {
      return (
        <button onClick={this.handleEvent}>Click on me</button>
      );
    }
  }
  
  export default HandleName;