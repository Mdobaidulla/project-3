import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 20,
            level: props.level,
            started: "yes",
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
		this.chooseLevel = this.chooseLevel.bind(this);
	}
	componentDidMount() {
        if(this.started==='yes'){
            this.start();
        }
        
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
        this.setState({
            minutes: 20,
            seconds: 0,
        })
        //this.props.solution();
    };
    
    restart = () =>{
        this.start();
    }

	chooseLevel = (event) => {
		this.props.setLevel(event.target.value);
	};

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
				<span >
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
				<button onClick={this.restart}>Restart</button>
				<button onClick={this.stop}>Solve</button>
				<button>
					<Link to="/rules">Help</Link>
				</button>
				<span className={timerColor}>
					Timer:&nbsp;
					{this.state.minutes < 10
						? `0${this.state.minutes}`
						: this.state.minutes}
					:
					{this.state.seconds < 10
						? `0${this.state.seconds}`
						: this.state.seconds}
				</span>
			</>
		);
	}
}

export default Control;
