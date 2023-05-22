import { all } from 'redux-saga/effects';
import { fetchPostsSaga } from './posts';

export default function* rootSaga() {
  yield all([fetchPostsSaga()]);
}
