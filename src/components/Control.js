import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 20,
			level: props.level,
			run: false,
			level: "easy",
		   // stop: "",
		   medium:true,
		   hard: false,
		   random: false,
			
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
		this.chooseLevel = this.chooseLevel.bind(this);
	}
	componentDidMount() {}

	start = () => {
		this.count();
	};

	count = () => {
		this.timer = setInterval(() => {
			this.counter();
		}, 1000);
	};

	counter = () => {
		if (this.state.seconds === 0) {
			this.setState({
				minutes: this.state.minutes - 1,
				seconds: 60,
			});
		}
		this.setState({
			seconds: this.state.seconds - 1,
		});

		if (this.state.seconds === 0 && this.state.minutes === 0) {
			this.stop();
		}
	};

	stop = (e) => {
		clearInterval(this.timer);
	};

	chooseLevel = (event) => {
		this.props.setLevel(event.target.value);
	};
	changeLevel = () => {
		this.setState=({
       
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.countStart);
	}
	render() {
		let timerColor;
		if (this.state.seconds <= 10 && this.state.minutes===0) {
			timerColor = "timer-warning";
		}
		if (this.state.seconds <= 5 && this.state.minutes===0) {
			timerColor = "timer-critical";
		}
		return (
			<>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
			<span className="hide">Current Level: &nbsp;&nbsp;&nbsp;</span><select name={this.state.level} id={this.state.level} onChange={this.chooseLevel}>
				
						<option value="easy">Easy</option>
						<option value="medium" disabled={!this.state.medium}>Medium</option>
						<option value="hard" disabled={!this.state.hard}>Hard</option>
						<option value="random" disabled={!this.state.random}>Random</option>
					</select>

					</span>
				
					<button onClick={this.start}>
						Restart
					</button>
				
					<button  onClick={this.reset}>
						Solve
					</button>

					<button >
					<Link to='/'>Game</Link>
					</button>
			        <button >
					<Link to='/rules'>Help</Link>
					</button>
					<span className="hide">Timer:</span>&nbsp;
				 {(this.state.minutes<10) ? `0${this.state.minutes}` : this.state.minutes }: 
				{(this.state.seconds<10) ? `0${this.state.seconds}` : this.state.seconds }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</>
		);
	}
}

export default Control;
