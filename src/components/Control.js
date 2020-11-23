import React, { Component } from "react";

class Control extends Component {
	constructor() {
		super();
		this.state = {
			seconds: 0,
			minutes: 0,
			run: false,
            level: "",
           // stop: "",
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
	}
	componentDidMount() {
		// this.count();
	}

	start = () => {
		console.log("Started");
		this.setState({
			run: true,
		});
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
		// this.displaySeconds();
	};

	displayTime = () => {
		console.log(this.state.seconds);
		return this.state.seconds;
	};

	stop = (flag) => {
		clearInterval(() => {
			this.count();
		});
	};

	reset = (e) => {
        console.log("Game reset");
       
        clearInterval(this.timer)
	};

	// componentWillUnmount() {
	// 	clearInterval(this.state.countStart);
	// }

	chooseLevel = (event) => {
		console.log(event.target.value);
		this.setState({
			level: event.target.value,
		});
	};

	render() {
		return (
			<>
				<div className="current">
					Current game:
					<button className="current restart" onClick={this.start}>
						Restart
					</button>
					<button className="current end" onClick={this.reset}>
						Solve
					</button>
				</div>
				<div className="new">
					<select id={this.state.level} onChange={this.chooseLevel}>
						<option disabled selected value>
							Choose New Game Level
						</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
						<option value="random">Random</option>
					</select>
				</div>
				Timer: {this.state.minutes}:{this.state.seconds}
			</>
		);
	}
}

export default Control;
