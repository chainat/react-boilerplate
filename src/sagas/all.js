import { fork } from 'redux-saga/effects';
import randomUserSaga from './randomUser.saga';

function* rootSagas() {
  yield fork(randomUserSaga);
}

export default rootSagas;
