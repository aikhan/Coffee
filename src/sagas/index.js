import {all} from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import venueSaga from './venueSaga';

export default function* rootSaga() {
  yield all([imagesSaga(), venueSaga()]);
}
