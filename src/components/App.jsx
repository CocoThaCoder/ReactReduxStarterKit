import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Create material-ui theme
const theme = createMuiTheme();

// Components
import Main from './Main';

//import routes and reducers
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.render-target')
);
