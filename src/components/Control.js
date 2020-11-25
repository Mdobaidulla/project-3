import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 20, //Default amount of time to complete the game.
			level: props.level,
			run: false,
			medium: false,  //Hidden level of difficulty unlocked when an easy level is completed.
			hard: false,	//Hidden level of difficulty unlocked when a medium level is completed.
			random: false,	//Hidden random level of difficulty unlocked when a hard level is completed.
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
		this.chooseLevel = this.chooseLevel.bind(this);
	}
	componentDidMount() {
		if (this.started === "yes") {
			this.start();
		}
	}

	start = () => {
		this.count(); //Starts the countdown timer
	};

	count = () => {
		this.timer = setInterval(() => {
			this.counter();
		}, 1000);
	};

	counter = () => {
		if (this.state.seconds === 0) { //When the timer hits 0 seconds, decrement the minutes by 1 and reset the seconds to 60.
			this.setState({
				minutes: this.state.minutes - 1,
				seconds: 60,
			});
		}
		this.setState({
			seconds: this.state.seconds - 1,
		});

		if (this.state.seconds === 0 && this.state.minutes === 0) { //Prevents timer from counting negative
			this.stop();
		}
	};

	stop = (e) => {
		clearInterval(this.timer); //Stops the timer
	};

	restart = () => { //Used when game is restarted
		this.start();
	};

	chooseLevel = (event) => { //Takes value of drop down and passes back to parent
		this.props.setLevel(event.target.value);
	};
	

	componentWillUnmount() {
		clearInterval(this.state.countStart);
	}
	render() {
		let timerColor;
		if (
			this.state.minutes < 10 ||
			(this.state.minutes === 10 && this.state.seconds === 0)
		) {
			timerColor = "timer-warning"; //Changes background of timer to be yellow when time is between 3 and 10 minutes
		}
		if (
			this.state.minutes < 3 ||
			(this.state.minutes === 3 && this.state.seconds === 0) 
		) {
			timerColor = "timer-critical"; //Changes background of time to be red when time is between 0 and 3 minutes.
		}

		return (
			<>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>
					<span className="hide">Current Level: &nbsp;&nbsp;&nbsp;</span>
					<select
						name={this.state.level}
						id={this.state.level}
						onChange={this.chooseLevel}
					>
						<option value="easy">Easy</option>
						<option value="medium" disabled={!this.state.medium}>
							Medium
						</option>
						<option value="hard" disabled={!this.state.hard}>
							Hard
						</option>
						<option value="random" disabled={!this.state.random}>
							Random
						</option>
					</select>
				</span>
				<button onClick={this.start}>Start</button>
				<button onClick={this.stop}>Pause</button>
				<button>
					<Link to="/">Game</Link>
				</button>
				<button>
					<Link to="/rules">Help</Link>
				</button>
				<span className="hide">Timer:</span>&nbsp;
				<span className={timerColor}>
					{this.state.minutes < 10
						? `0${this.state.minutes}`
						: this.state.minutes}
					:
					{this.state.seconds < 10
						? `0${this.state.seconds}`
						: this.state.seconds}
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</span>
			</>
		);
	}
}

export default Control;
