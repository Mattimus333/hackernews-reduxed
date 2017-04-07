import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import hnApp from './reducers'
import App from './App';
import './index.css';
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//we create the store and make it available to our app through Provider.
const store = createStore(
  hnApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, promiseMiddleware())
);

// const composeStoreWithMiddleWare = applyMiddleware(
//   promiseMiddleware()
// )(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
