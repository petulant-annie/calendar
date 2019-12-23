import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import calendarState from './src/reducers/taskReducer';

const store = createStore(
  combineReducers({
    calendarState,
  }),
  {},
  compose(
    applyMiddleware(
      logger,
      thunk,
    ),
  ),
);

export default store;
