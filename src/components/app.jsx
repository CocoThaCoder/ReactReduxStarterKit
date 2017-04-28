import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Components
import Main from './main';

//import routes and reducers
import reducers from '../js/reducers';

const _reducers = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(_reducers);

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<Route path="/" component={Main} />
		</Router>
	</Provider>
	, document.querySelector('.render-target')
);
