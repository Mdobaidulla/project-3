import React, { Component } from 'react';
import Box from './Box';
import {getBoardNumber} from '../apis/Api';

class Board extends Component {
    componentDidMount(){
        /**
         * Calling the API GET call and passing the value 
         * into App.js through setDefaultBoard method
         */
      getBoardNumber('board','easy')
      .then((response) =>{
          this.props.setDefaultBoard(response.data.board);
      })
      .catch((error) =>{
          console.log(`API ERROR:`, error);
      })
    }; 
    constructor(props) {
        super(props);
        this.state = {
          updatedBoard: [],
        }
      } 
    render() {
        const boxe = this.props.boxes.map((box, index) => {
            return <Box box={box} key={index} boxID={index}/>
        })
        return (
            <div className="board">
               {boxe}
            </div>
        )
    }
}

export default Board;