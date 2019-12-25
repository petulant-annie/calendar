import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import calendarState from './reducers/taskReducer';

const store = createStore(
  calendarState,
  applyMiddleware(
    thunk,
    logger,
  ),
);

export default store;
