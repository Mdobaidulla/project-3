import React, { Component } from "react";

class Control extends Component {
	constructor() {
		super();
		this.state = {
			countStart: 0,
		};
		this.counter = this.counter.bind(this);
		this.count = this.count.bind(this);
	}
	// componentDidMount(){
	//     this.count();
	// }
	counter = () => {
		this.setState({ countStart: this.state.countStart + 1 });
	};
	count = () => {
		setInterval(() => {
			this.counter();
		}, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.countStart)
    }

	render() {
		return (
			<>
				<div className="current">
					Current game:
					<button className="current restart" onClick={this.count}>
						Restart
					</button>
					<button className="current end" onClick={clearInterval(this.countStart)}>
						End
					</button>
				</div>
				<div className="new">
					<span className="newtext">New game:</span>
					<button className="new easy">Easy</button>
					<button className="new medium">Medium</button>
					<button className="new hard">Hard</button>
					<button className="new random">Random</button>
				</div>
				Timer: {this.state.countStart}
			</>
		);
	}
}

export default Control;
