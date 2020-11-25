import React, { Component } from "react";
import Time from "./Time";

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0,
			inProgress: "false",
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
	}
	componentDidMount() {
		// this.count();
	}

	start = () => {
		this.setState({
			inProgress: true,
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
	};

	stop = () => {
		clearInterval(() => {
			this.count(this.timer);
		});
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<>
				<Time minutes={this.state.minutes} seconds={this.state.seconds} />
			</>
		);
	}
}

export default Timer;
