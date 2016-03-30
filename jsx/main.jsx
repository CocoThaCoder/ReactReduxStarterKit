import React from 'react';
import { Link } from 'react-router';
import Hammer from 'react-hammerjs';

const Main = (props) => {

	return (
		<div className="app-container">
			<h1 className="app-container-title">REACT STARTER KIT</h1>
			<img className="app-container-image" src="./images/minime.png" alt="minime" />
			{props.children}
		</div>
		);

}

export default Main;
