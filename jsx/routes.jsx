import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Main from './main';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
);