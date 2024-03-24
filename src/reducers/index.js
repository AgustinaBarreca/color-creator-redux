import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  colors: colorReducer,
  user: userReducer,
});

export default rootReducer;
