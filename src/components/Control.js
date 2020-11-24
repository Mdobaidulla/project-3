import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Control extends Component {
	constructor() {
		super();
		this.state = {
			seconds: 0,
			minutes: 0,
			run: false,
            level: "easy",
		   // stop: "",
		   isDisable:false,
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
	}
	componentDidMount() {
		// this.count();
		//this.props.setDefaultBoard(response.data.board, response.data);
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
			
			seconds:this.state.seconds + 1,
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

	chooseLevel = (event) => {
		this.setState({
			level: event.target.value,
		});
	};

	render() {
		return (
			<>
			<span>
					<span className="hide">Current Level: &nbsp;&nbsp;&nbsp;</span><select name={this.state.level} id={this.state.level} onChange={this.chooseLevel}>
						<option >Select</option>
						<option value="easy">Easy</option>
						<option value="medium" >Medium</option>
						<option value="medium" disabled={!this.state.isDisable}>Medium</option>
						<option value="hard" disabled>Hard</option>
						<option value="random" disabled>Random</option>
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
				Timer:&nbsp;
				 {(this.state.minutes<10) ? `0${this.state.minutes}` : this.state.minutes }: 
				{(this.state.seconds<10) ? `0${this.state.seconds}` : this.state.seconds }
			</>
		);
	
	}
}

export default Control;
