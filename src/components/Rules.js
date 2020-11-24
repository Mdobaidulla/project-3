import React from "react";

const Rules = () => {
	return <div className="rules">
        <h2 align="center">Rules</h2>
        <ul>
            <li>Game starts on page load and on easy difficulty.</li>
            <li>New game cannot start with a current game in progress.</li>
            <li>Click on Solve to end current game and show game's solution.</li>
            <li>Choose difficulty to start new game.</li>
        </ul>
    </div>;
};

export default Rules;
