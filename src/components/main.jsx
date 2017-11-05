import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { increment } from '../actions';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { red } from 'material-ui/colors';

// Styles
import '../styles/index.scss';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app-container">
				<AppBar position="static" color="accent" style={styles.red}>
					<Toolbar>
						<Typography type="title" color="inherit" style={{ flex: 1 }}>
							REACT STARTER KIT!
						</Typography>
					</Toolbar>
				</AppBar>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				<div className="app-counter">{ this.props.counter.count }</div>
				<Button
					raised
					style={styles.red}
					className="app-button"
					onClick={this.props.increment}
				>
					Increment Me!
				</Button>
			</div>
			);
	}

}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
}

export default connect(mapStateToProps, { increment })(Main);

const styles = {
	red: {
		backgroundColor: red[700],
		color: '#fff'
	}
};