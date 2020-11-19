import React, { Component } from 'react';
import Square from './Square';

class Box extends Component {
    render() {
       const values= this.props.box.map((value, index) =>{
           let canEdit = false;
           // If the value is 0 in the array, send an empty string in the value prop and allow edit
           if (value === 0)
           {
                value = '';
                canEdit = true;
           }
           return <Square value={value} key={index} canEdit={canEdit}/>
       })
        return (
            <div className="box">
               {values}
            </div>
        )
    }
}

export default Box;