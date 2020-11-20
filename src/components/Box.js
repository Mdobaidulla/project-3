import React, { Component } from 'react';
import Square from './Square';

class Box extends Component {
    render() {
       const values= this.props.box.map((value, index) =>{
           let squareStatus = "disabled";
           // If the value is 0 in the array, send an empty string in the value prop and allow edit
           if (value === 0)
           {
                value = '';
                squareStatus = "";
           }
           return <Square value={value} key={index} squareStatus={squareStatus} boxID={this.props.boxID} squareID={index} updateBoard={this.props.updateBoard} solutionBox={this.props.solutionBox}/>
       })
        return (
            <div className="box">
               {values}
            </div>
        )
    }
}

export default Box;