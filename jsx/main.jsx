import React from 'react';
import { Link } from 'react-router';
import Hammer from 'react-hammerjs';

const Main = (props) => {

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>REACT STARTER KIT</h1>
			{props.children}
		</div>
		);

}

export default Main;
