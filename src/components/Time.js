import React from "react";

const Time = (props) => {
    // let addZero;
    // if(this.props.seconds<10){
    //     addZero= "0"
    // }
	return (
		<>
			Timer: {props.minutes}:{/*addZero*/}{props.seconds}
		</>
	);
};

export default Time;
