import React, { Component } from 'react';
import Box from './Box';
import {getBoardNumber} from './apis/Api';

class Board extends Component {
    componentDidMount(){
        /**
         * Calling the API GET call and passing the value 
         * into App.js through setDefaultBoard method
         */
      getBoardNumber('board','easy')
      .then((response) =>{
          this.props.setDefaultBoard(response.data);
      })
      .catch((error) =>{
          console.log(`API ERROR:`, error);
      })
    };  
    render() {
        return (
            <div className="board">
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
            </div>
        )
    }
}

export default Board;