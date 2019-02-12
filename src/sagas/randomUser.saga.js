import { fork, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_SAMPLE,
  FETCH_ERROR,
  SAMPLE_USER_API_HOST,
  SAMPLE_LOADED,
} from '../consts/actions';

function* getSampleUsers(data) {
  try {
    const finalUrl = `${SAMPLE_USER_API_HOST}?results=${data.payload.limit}`;
    const res = yield axios.get(finalUrl);
    if (res.status === 200) {
      yield put({ type: SAMPLE_LOADED, payload: { users: res.data.results } });
    } else {
      throw new Error('Unable to fetch ');
    }
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
