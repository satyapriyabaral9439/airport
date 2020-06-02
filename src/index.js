import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/airport.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
console.log(store.getState())

//const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
