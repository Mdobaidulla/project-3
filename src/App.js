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
    let transformBoard =[];
    // transform board values so each array represents a box instead of a row
    for(let i = 0; i < 9; i=i+3)
    {   
      transformBoard[i] = boardValue[i].slice(0,3).concat(boardValue[i+1].slice(0,3),boardValue[i+2].slice(0,3));
      transformBoard[i+1] = boardValue[i].slice(3,6).concat(boardValue[i+1].slice(3,6),boardValue[i+2].slice(3,6));
      transformBoard[i+2] = boardValue[i].slice(6,9).concat(boardValue[i+1].slice(6,9),boardValue[i+2].slice(6,9)); 
    }

		this.setState({
			defaultBoard: transformBoard,
			board: response,
		});
	};
	//This method is updating the value that we hve from solition board
	setSolutionBoard = (solutionBoard) => {
    let transformSolution = [];
    // transform solution board so each array represents a box instead of a row
     for(let i = 0; i < 9; i=i+3)
     {    
        transformSolution[i] = solutionBoard[i].slice(0,3).concat(solutionBoard[i+1].slice(0,3),solutionBoard[i+2].slice(0,3));
        transformSolution[i+1] = solutionBoard[i].slice(3,6).concat(solutionBoard[i+1].slice(3,6),solutionBoard[i+2].slice(3,6));
        transformSolution[i+2] = solutionBoard[i].slice(6,9).concat(solutionBoard[i+1].slice(6,9),solutionBoard[i+2].slice(6,9)); 
     }

		this.setState({ 
      solutionBoard: transformSolution 
    });
	};

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
