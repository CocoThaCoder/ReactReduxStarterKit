import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as prodComposeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// import reducers
import rootReducer from '../reducers';

// set up logger
const logger = createLogger();
// Create a history
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

/**
 * This variable is "true" if the application
 * is running in production.
 */
const isProduction = process.env.NODE_ENV === 'production';

export default function configureStoreAndHistory(initialState) {
  let store;

  if (isProduction) {
    store = createStore(rootReducer, initialState, prodComposeWithDevTools(applyMiddleware(historyMiddleware)));
  } else {
    /**
     * Only use the DevTools component
     * when in development.
     */
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(historyMiddleware, logger)));
  }

  return { store, history };
}
