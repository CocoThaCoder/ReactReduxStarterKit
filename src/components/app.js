import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Components
import Main from './main';

//import routes and reducers
import reducer from '../js/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={Main} />
		</Router>
	</Provider>
	, document.querySelector('.render-target')
);
