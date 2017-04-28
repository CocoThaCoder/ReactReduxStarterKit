import React, { Component } from 'react';
import { Link } from 'react-router';
import Hammer from 'react-hammerjs';

// Styles
import '../../public/styles/index.scss';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	render() {
		const style = {
			width: '100px',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: 'center'
		};

		return (
			<div className="app-container">
				<h1 className="app-container-title">REACT STARTER KIT!!</h1>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				<div style={style}>{ this.state.count }</div>
				{ this.props.children }
				<button
					className="btn btn-default"
					style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
					onClick={() => { this.setState({ count: this.state.count + 1 }); }}
				>
					Increment Me!
				</button>
			</div>
			);
	}

}

export default Main;
