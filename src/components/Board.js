import React, { Component } from "react";
import Box from "./Box";
import { getBoardNumber } from "../apis/Api";

class Board extends Component {
	componentDidMount() {
		/**
		 * Calling the API GET call and passing the value
		 * into App.js through setDefaultBoard method
		 */
		let thisLevel = this.props.level;
		console.log("This board level", thisLevel);
		getBoardNumber("board", 'easy')
			.then((response) => {
				this.props.setDefaultBoard(response.data.board, response.data);
				this.setState({
					updatedBoard: this.props.boxes.map(function (arr) {
						return arr.slice();
					}),
				});
				console.log("Get request data: ", response.data);
			})
			.catch((error) => {
				console.log(`API ERROR:`, error);
			});
	}
	constructor(props) {
		super(props);
		this.state = {
			updatedBoard: [],
		};
	}

	render() {
		const boxe = this.props.boxes.map((box, index) => {
			return (
				<Box
					box={box}
					key={index}
					boxID={index}
					updateBoard={this.updateBoard}
					solutionBox={this.props.solutionBoard[index]}
				/>
			);
		});
		return <div className="board">{boxe}</div>;
	}

	// Take new user input and the box & square IDs and update the board
	updateBoard = (input, boxID, squareID) => {
		// DEBUG - console.log(`The value ${input} was entered into square ${squareID} of box ${boxID}`);

		/// Create a copy of the solution board
		let solutionBoard = this.props.solutionBoard.map(function (arr) {
			return arr.slice();
		});

		// Create a copy of the boxes array to store changes
		let updatedBoard = this.state.updatedBoard;

		// Update the cell in the array that the user modified
		updatedBoard[boxID][squareID] = parseInt(input);

		// Set the state with the new changes of the updated board
		this.setState({
			updatedBoard: updatedBoard,
		});

		// DEBUG - console.log(this.isCorrectInput(solutionBoard[boxID][squareID],updatedBoard[boxID][squareID]));
	};

	// Check if the new value added is the correct input
	isCorrectInput = (numSolution, numInput) => {
		if (numSolution === numInput || numSolution == NaN) return true;
		else return false;
	};
}

export default Board;
