import React, { Component } from "react";
import Select from "react-select";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0,
			run: false,
			level: props.level,
			// stop: "",
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
	}
	componentDidMount() {
		//  this.chooseLevel("easy");
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

		clearInterval(this.timer);
	};

	componentWillUnmount() {
		clearInterval(this.state.countStart);
	}


	render() {
        // console.log("Control level: ", this.state.level);
        const addZero = () =>{
            if(this.state.seconds<10){
                return "0"
            }
            else {return ""}
        }
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
				
				Control selected value is : {this.state.level}. Timer: {this.state.minutes}:{addZero()}
				{this.state.seconds}
			</>
		);
	}
}

export default Control;
