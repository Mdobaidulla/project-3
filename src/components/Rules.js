import React from "react";

const Rules = () => {
	return <div className="rules">
        <h2 align="center">Rules</h2>
        <ul>
            <li>Game starts on page load and on easy difficulty.</li>
            <li>Click on Start to have timer countdown.</li>
            <li>Click on Pause to stop the timer.</li>
            <li>Choose difficulty to start new game.</li>
            <li>Other difficulties unlock when games are completed.</li>
        </ul>
    </div>;
};

export default Rules;
