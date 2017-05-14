import { combineReducers } from 'redux';
import musicSearchResultsReducer from './musicSearchResultsReducer';
import musicSearchParamsReducer from './musicSearchParamsReducer';

const mainReducer = combineReducers({
  results: musicSearchResultsReducer,
  params: musicSearchParamsReducer
});

export default mainReducer;
