import React, { Component } from 'react';
import "./Modal.css";

class Modal extends Component {
  newElement = document.createElement("div");
  componentDidMount = () => {
    modalRoot.appendChild({newElement});
  }
  componentWillUnmount = () => {
    modalRoot.removeChild({newElement});
  }
  render() {

    if(!this.props.show){
        return null;
    }
    return ReactDOM.createPortal((
        <div className="modal">
          <h2>Congratulations!</h2>
          <div className="content">You solved the puzzle!</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      ), newElement);
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
}

export default Modal;