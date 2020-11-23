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
        this.props.setDefaultBoard(response.data.board, response.data);
        this.setState({
            updatedBoard: this.props.boxes.map(function(arr) {
            return arr.slice();
         })
        })
        console.log('Get request data: ',response.data);
      })
      .catch((error) =>{
          console.log(`API ERROR:`, error);
      })
    }; 
    constructor(props) {
        super(props);
        this.state = {
          updatedBoard: [],
          isSolved: false,
        }
      } 

    render() {
        const boxe = this.props.boxes.map((box, index) => {
            return <Box box={box} key={index} boxID={index} updateBoard={this.updateBoard} solutionBox={this.props.solutionBoard[index]} isSolved={this.state.isSolved}/>
        })
        return (
            <div className="board">
               {boxe}
            </div>
        )
    }

    // Take new user input and the box & square IDs and update the board
    updateBoard = (input, boxID, squareID) => {
        // DEBUG - console.log(`The value ${input} was entered into square ${squareID} of box ${boxID}`);

        /// Create a copy of the solution board
        let solutionBoard = this.props.solutionBoard.map(function(arr) {
            return arr.slice();
         })

        // Create a copy of the boxes array to store changes
        let updatedBoard = this.state.updatedBoard;

        // Update the cell in the array that the user modified
        updatedBoard[boxID][squareID] = parseInt(input);

        // Check if the addition of the new input solved the board
        let isSolved = this.isSolved(updatedBoard, solutionBoard);
        this.props.showModal();
        if (isSolved)
        {
            console.log(`Congratulations! You solved the puzzle!`);
            this.props.showModal();
        }

        // Set the state with the new changes of the updated board
        this.setState({
            updatedBoard: updatedBoard,
            isSolved: isSolved,
        })

        // DEBUG - console.log(this.isCorrectInput(solutionBoard[boxID][squareID],updatedBoard[boxID][squareID]));
    }

    isSolved = (playerBoard, solutionBoard) => {
        if (JSON.stringify(playerBoard) === JSON.stringify(solutionBoard))
            return true
        else
            return false;
    }
}

export default Board;