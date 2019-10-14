import {put, call, take} from 'redux-saga/effects';

import {setVenuesFetched, setError} from '../actions';
import {VENUE} from '../constants';
import {fetchVenues} from '../api';

function* handleFetchVenues() {
  console.log('handleFetchVenues in venue saga');
  try {
    const venues = yield call(fetchVenues);
    venues.map(venue => console.log('venue name : ' + venue.name));
    yield put(setVenuesFetched(venues));

    //Do Something.
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchVenuesLoad() {
  yield take(VENUE.VENUE_FETCH, handleFetchVenues);
  yield call(handleFetchVenues);
}
