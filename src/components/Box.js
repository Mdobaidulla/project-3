import React, { Component } from 'react';
import Square from './Square';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
          boxID: this.props.index,
        }
      }
    render() {
       const values= this.props.box.map((value, index) =>{
           let squareStatus = "disabled";
           // If the value is 0 in the array, send an empty string in the value prop and allow edit
           if (value === 0)
           {
                value = '';
                squareStatus = "";
           }
           return <Square value={value} key={index} squareStatus={squareStatus} squareID={index}/>
       })
        return (
            <div className="box">
               {values}
            </div>
        )
    }
}

export default Box;