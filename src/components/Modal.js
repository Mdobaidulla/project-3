import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if(!this.props.show){
        return null;
    }
  return <div>You won!</div>;
  }
}

export default Modal;