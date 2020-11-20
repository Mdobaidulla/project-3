import React, { Component } from "react";

class Control extends Component{
	
    render() {
        // const count = () => {
        //     return "This Works";

        // };
        // document.getElementById("timer").innerHTML = "5";
    

	return (
		<>
			<div className="current">
				Current game:
				<button class="current restart">Restart</button>
				<button class="current end">End</button>
			</div>
			<div className="new">
				<span class="newtext">New game:</span>
				<button class="new easy" >Easy</button>
				<button class="new medium">Medium</button>
				<button class="new hard">Hard</button>
				<button class="new random">Random</button>
			</div>
			<p id="timer"></p>
		</>
    );
    }
};

export default Control;
