/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import './index.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import randomUserReducer from './reducers/randomUser.reducer';
import rootSagas from './sagas/all';

import defaultState from './stores/data.store';

const allReducers = combineReducers({
  users: randomUserReducer,
});

const sagaMiddleware = createSagaMiddleware();

// Create store enhancer using the redux-devtools, you must install redux devtool Chrome extension
const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  allReducers,
  defaultState,
  enhancer,
);

// Apply sagas
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
