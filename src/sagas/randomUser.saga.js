import { fork, takeEvery, put } from 'redux-saga/effects';
import ApiClient from '../apis/apis';

import {
  FETCH_SAMPLE,
  FETCH_ERROR,
  SAMPLE_LOADED,
} from '../consts/actions';

function* getSampleUsers(data) {
  try {
    const res = yield ApiClient.getRandomUsers(data.payload);
    yield put({ type: SAMPLE_LOADED, payload: { users: res.results } });
  } catch (err) {
    yield put({ type: FETCH_ERROR, payload: { status: false, message: err.message } });
  }
}

function* fetchRandomUsers() {
  yield takeEvery(FETCH_SAMPLE, getSampleUsers);
}
export default function* randomUserSaga() {
  yield fork(fetchRandomUsers);
}
