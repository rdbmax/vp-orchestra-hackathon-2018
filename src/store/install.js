import { combineReducers, createStore, compose } from 'redux';
import tripsReducer from './reducers/trips';

const composed = [];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composed.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(
  combineReducers({ trips: tripsReducer }),
  compose(...composed),
);
