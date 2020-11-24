import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0,
			level: props.level,
			warning: "",
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
		this.chooseLevel = this.chooseLevel.bind(this);
	}
	componentDidMount() {
		//  this.chooseLevel("easy");
	}

	start = () => {
		this.count();
	};

	count = () => {
		this.timer = setInterval(() => {
			this.counter();
		}, 1000);
	};

	counter = () => {
		this.setState({
			seconds: this.state.seconds + 1,
		});

		if (this.state.seconds === 60) {
			this.setState({
				minutes: this.state.minutes + 1,
				seconds: 0,
			});
		}
		this.timerWarning();
	};

	stop = (flag) => {
		clearInterval(() => {
			this.count();
		});
	};

	reset = (e) => {
		clearInterval(this.timer);
	};

	chooseLevel = (event) => {
		console.log(event.target.value);
		this.setState({
			level: event.target.value,
		});
	};
	timerWarning = () => {
		if (this.state.minutes === 0 && this.state.seconds === 10) {
			console.log("WARNING");
			this.setState({
				warning: "WARNING!",
			});
		}
	};

	componentWillUnmount() {
		clearInterval(this.state.countStart);
	}
	render() {
		return (
			<>
				<span>
					<span className="hide">Current Level: &nbsp;&nbsp;&nbsp;</span>
					<select
						name={this.state.level}
						id={this.state.level}
						onChange={this.chooseLevel}
					>
						<option>Select</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
						<option value="random">Random</option>
					</select>
				</span>
				<button onClick={this.start}>Restart</button>
				<button onClick={this.reset}>Solve</button>
				<button>
					<Link to="/rules">Help</Link>
				</button>
				Timer:&nbsp;
				{this.state.minutes < 10
					? `0${this.state.minutes}`
					: this.state.minutes}
				:
				{this.state.seconds < 10
					? `0${this.state.seconds}`
					: this.state.seconds}
				{this.warning}
			</>
		);
	}
}

export default Control;
