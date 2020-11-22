import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Control from "./components/Control";

import SolutionBoard from "./components/SolutionBoard";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultBoard: [],
			board: {},
			solutionBoard: [],
		};
	}

	/**
	 * This method will take the value from the API Get call as an array
	 * Then set this value to the state defaultBoard array, so that we will be
	 * able to modify the box, and set into the box by passing into child.
	 * @param {this is the value we will get from API get call} boardValue
	 */
	setDefaultBoard = (boardValue, response) => {
    let transformBoard = this.transformBoard(boardValue);
		this.setState({
			defaultBoard: transformBoard,
			board: response,
		});
	};
	//This method is updating the value that we hve from solition board
	setSolutionBoard = (solutionBoard) => {
    let transformSolution = this.transformBoard(solutionBoard);
		this.setState({ 
      solutionBoard: transformSolution 
    });
  };
  
  transformBoard = (array) => {
    let transformedArray = [];
    for(let i = 0; i < 9; i=i+3)
     {    
        transformedArray[i] = array[i].slice(0,3).concat(array[i+1].slice(0,3),array[i+2].slice(0,3));
        transformedArray[i+1] = array[i].slice(3,6).concat(array[i+1].slice(3,6),array[i+2].slice(3,6));
        transformedArray[i+2] = array[i].slice(6,9).concat(array[i+1].slice(6,9),array[i+2].slice(6,9)); 
     }
     return transformedArray;
  }

	render() {
		return (
			<div className="App">
				<h1 align="center">Sublocu</h1>

				<Board
					setDefaultBoard={this.setDefaultBoard}
					boxes={this.state.defaultBoard}
					solutionBoard={this.state.solutionBoard}
				/>
				<Control />
				{this.state.defaultBoard.length > 0 && (
					<SolutionBoard
						setSolutionBoard={this.setSolutionBoard}
						board={this.state.board}
					/>
				)}
			</div>
		);
	}
}

export default App;
