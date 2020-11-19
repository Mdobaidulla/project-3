import React, { Component } from 'react';
import Square from './Square';

class Box extends Component {
    render() {
       const values= this.props.box.map((value, index) =>{
           return <Square value={value} key={index}/>
       })
        return (
            <div className="box">
               {values}
            </div>
        )
    }
}

export default Box;