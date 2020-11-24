import React, { Component } from "react";
import Modal from 'react-modal'
import $ from 'jquery';
import "../Modal.css";

class CustomModal extends Component {

    constructor (props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: this.props.open,
        }
    }

    openModal () { 
        this.setState({
            open: true
        });
        $(function(){
            $("#custom-modal").appendTo("body");
        });
    }

    closeModal () {
        this.setState({
            open: false
        });
    }

    componentDidMount(){
        $(function(){
            $("#custom-modal").appendTo("body");
        });
    }

    render () {
     return (
            <div>
                <button onClick={this.openModal}>Win Message</button>
                <Modal className="modal" isOpen={this.props.open} onRequestClose={this.props.closeModal}>
                    <h2>Congratulations!</h2> 
                    <div className="content">You solved the puzzle!</div>
                    <div className="actions">
                    <button onClick={this.props.close} className="toggle-button">Close</button>
                    </div>                   
                </Modal>
            </div>
        );
    }
}
export default CustomModal;