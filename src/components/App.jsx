import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { withTheme, ThemeProvider } from 'styled-components';
import thunk from 'redux-thunk';

import '../styles/global';

// Components
import Main from './Main';

// Theme
const theme = {
  main: 'red',
};

// Setup Store and History
import configureStoreAndHistory from './Store';
const config = configureStoreAndHistory({});

ReactDOM.render(
  <Provider {...config}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector('.render-target')
);
