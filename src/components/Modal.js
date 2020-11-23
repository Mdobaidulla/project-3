import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if(!this.props.show){
        return null;
    }
    return (
        <div className="modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">{this.props.children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
}

export default Modal;