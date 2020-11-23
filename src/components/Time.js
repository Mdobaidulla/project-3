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
				Timer: {this.props.minutes}:{this.props.seconds}
			</>
		);
	}
}

export default Time;
