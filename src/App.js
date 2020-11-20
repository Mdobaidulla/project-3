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
		this.setState({
			defaultBoard: boardValue,
			board: response,
		});
	};
	//This method is updating the value that we hve from solition board
	setSolutionBoard = (solutionBoard) => {
		this.setState({ solutionBoard });
	};

	render() {
		return (
			<div className="App">
				<h1>Sublocu</h1>

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
