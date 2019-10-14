import {combineReducers} from 'redux';

import loadingReducer from './loadingReducer';
import venueReducer from './venueReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  // isLoading: loadingReducer,
  venue: venueReducer,
  // error: errorReducer,
});

export default rootReducer;
