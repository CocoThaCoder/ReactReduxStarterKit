import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Root from './root';

//import routes and reducers
import reducer from '../js/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<AppContainer>
		<Root store={ store } history={ history }/>
	</AppContainer>
	, document.querySelector('#content')
);

if (module.hot) {
	module.hot.accept('./root', () => {
		const NewRoot = require('./root').default;
		ReactDOM.render(
			<AppContainer>
				<NewRoot store={ store } history={ history }/>
			</AppContainer>
			, document.querySelector('#content')
		);
	});
}
