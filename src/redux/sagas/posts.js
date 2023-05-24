import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { REQUEST_POSTS } from '../actions/types/posts';
import {
  receivePostsSuccess,
  receivePostsFailure,
} from '../actions/creators/posts';
import { getPosts } from '../../http/postAPI';

function* onRequestPosts(action) {
  try {
    const data = yield call(getPosts, action.payload.params);
    yield delay(500);
    yield put(receivePostsSuccess(data));
  } catch (e) {
    yield put(receivePostsFailure(e));
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(REQUEST_POSTS, onRequestPosts);
}
