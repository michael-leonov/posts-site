import { all } from 'redux-saga/effects';
import { fetchPostsSaga } from './posts';
import { fetchCommentsSaga } from './comments';
import { fetchUsersSaga } from './user';

export default function* rootSaga() {
  yield all([fetchPostsSaga(), fetchCommentsSaga(), fetchUsersSaga()]);
}
