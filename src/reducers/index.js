import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;