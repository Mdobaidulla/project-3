import React, { Component } from "react";
import Timer from "./components/Timer";
import Time from "./components/Time";

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			seconds: 0,
			minutes: 0,
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

	render() {
		return (
			<>
				<Time 
                minutes={this.state.minutes}
                seconds={this.state.seconds}/>
			</>
		);
	}
}

export default Timer;
