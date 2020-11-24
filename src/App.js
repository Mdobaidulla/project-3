import React, { Component } from "react";
import "./App.css";
import "./Footer.css";
import Board from "./components/Board";
import Control from "./components/Control";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import { Route, Link } from "react-router-dom";

import SolutionBoard from "./components/SolutionBoard";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultBoard: [],
			board: {},
			solutionBoard: [],
			level: "",
		};
	}

	/**
	 * This method will take the value from the API Get call as an array
	 * Then set this value to the state defaultBoard array, so that we will be
	 * able to modify the box, and set into the box by passing into child.
	 * @param {this is the value we will get from API get call} boardValue
	 */
	setDefaultBoard = (boardValue, response) => {
		let transformBoard = this.transformBoard(boardValue); //transform board values to have each nested array represent a box instead of a row
		this.setState({
			defaultBoard: transformBoard,
			board: response,
		});
	};
	//This method is updating the value that we hve from solition board
	setSolutionBoard = (solutionBoard) => {
		let transformSolution = this.transformBoard(solutionBoard); //transform solution board to have each nested array represent a box instead of a row
		this.setState({
			solutionBoard: transformSolution,
		});
	};

	setLevel = (level) => {
		this.setState({
			level: level,
		});
	};

	// Function to transform input array so each nested array represents a box instead of a row
	transformBoard = (array) => {
		let transformedArray = [];
		for (let i = 0; i < 9; i = i + 3) {
			transformedArray[i] = array[i]
				.slice(0, 3)
				.concat(array[i + 1].slice(0, 3), array[i + 2].slice(0, 3));
			transformedArray[i + 1] = array[i]
				.slice(3, 6)
				.concat(array[i + 1].slice(3, 6), array[i + 2].slice(3, 6));
			transformedArray[i + 2] = array[i]
				.slice(6, 9)
				.concat(array[i + 1].slice(6, 9), array[i + 2].slice(6, 9));
		}
		return transformedArray;
	};

	render() {
     console.log("App level", this.state.level)
		return (
			<div className="fullApp">
				<header>
					<h1 align="center">Sublocu</h1>
				</header>
				<section>
					<div className="controlBoard">
						<Control setLevel={this.setLevel} />
						{this.state.defaultBoard.length > 0 && (
							<SolutionBoard
								setSolutionBoard={this.setSolutionBoard}
								board={this.state.board}
							/>
						)}{" "}
					</div>
					<br></br>

					<div className="gameBoard">
						<Board
							setDefaultBoard={this.setDefaultBoard}
							boxes={this.state.defaultBoard}
							solutionBoard={this.state.solutionBoard}
							level={this.setLevel}
						/>
					</div>

					<div>
						<Route path="/rules" component={Rules} />
					</div>
				</section>
				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;
