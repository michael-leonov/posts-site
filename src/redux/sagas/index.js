import { all } from 'redux-saga/effects';
import { fetchPostsSaga, fetchCommentsSaga } from './posts';

export default function* rootSaga() {
  yield all([fetchPostsSaga(), fetchCommentsSaga()]);
}
