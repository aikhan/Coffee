//REDUCER
import {VENUE} from '../constants';
const initialState = [];

function venueReducer(state = initialState, action) {
  console.log('Action type is ' + action.type);
  switch (action.type) {
    case 'FETCHED_VENUES':
      console.log('venue count is ' + action.venues.length);
      return [...state, ...action.venues];
    case 'SEARCH_VENUE':
      return {rating: 345};
    case 'FILTER_VENUES_LIST':
      console.log('FILTER_VENUES');
      return {rating: 123};
    case 'LOAD_FAILED':
      console.log('Load has failed error is ' + action.error);
      return {rating: 123};
    default:
      return initialState;
  }
}

export default venueReducer;
