//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./component/home.js";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="Clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="Four">{props.digitFour}</div>
			<div className="Three">{props.digitThree}</div>
			<div className="Two">{props.digitTwo}</div>
			<div className="One">{props.digitOne}</div>
		</div>
	);
}

SimpleCounter.PropTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const Four = Math.floor(counter / 1000);
	const Three = Math.floor(counter / 100);
	const Two = Math.floor(counter / 10);
	const One = Math.floor(counter / 1);
	console.log(Four, Three, Two, One);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
