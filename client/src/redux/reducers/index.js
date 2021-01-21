import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import { phonesReducer, phoneReducer } from './phoneReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  phones: phonesReducer,
  phone: phoneReducer,
});

export default rootReducer;
