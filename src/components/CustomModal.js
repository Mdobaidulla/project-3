import React, { Component } from "react";
import Modal from 'react-modal'
import $ from 'jquery';
import "../Modal.css";

export default class CustomModal extends React.Component {

    constructor () {
        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: false
        }
    }

    openModal () { this.setState(
        {open: true});
        $(function(){
            $("#custom-modal").appendTo("body");
        });
    }

    closeModal () {
        this.setState({open: false});
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
                <Modal className="modal" isOpen={this.state.open} onRequestClose={this.closeModal}>
                <h2>Congratulations!</h2> 
                <div className="content">You solved the puzzle!</div>
                <div className="actions">
                <button onClick={this.closeModal} className="toggle-button">Close</button>
                </div>                   
                </Modal>
            </div>
        );
    }
}