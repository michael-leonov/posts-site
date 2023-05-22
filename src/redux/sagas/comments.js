import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { REQUEST_COMMENTS } from '../actions/types/comments';
import {
  receiveCommentsSuccess,
  receiveCommentsFailure,
} from '../actions/creators/comments';
import { getPostComments } from '../../http/commentAPI';

function* onRequestComments(action) {
  try {
    const data = yield call(getPostComments, action.payload.postId);
    yield delay(500);
    yield put(receiveCommentsSuccess(data));
  } catch (e) {
    yield put(receiveCommentsFailure(e));
  }
}

export function* fetchCommentsSaga() {
  yield takeLatest(REQUEST_COMMENTS, onRequestComments);
}
