/* eslint-disable no-undef */
import { takeLatest, put, call } from 'redux-saga/effects';
import { REQUEST_POSTS, REQUEST_COMMENTS } from '../actions/types/posts';
import {
  receivePostsSuccess,
  receivePostsFailure,
  receiveCommentsSuccess,
  receiveCommentsFailure,
} from '../actions/creators/posts';
import { getPosts, getPostComments } from '../../http/postAPI';

function* onRequestPosts() {
  try {
    const data = yield call(getPosts);
    yield put(receivePostsSuccess(data));
  } catch (e) {
    yield put(receivePostsFailure(e));
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(REQUEST_POSTS, onRequestPosts);
}

function* onRequestComments() {
  try {
    const data = yield call(getPostComments, action.postId);
    yield put(receiveCommentsSuccess(data));
  } catch (e) {
    yield put(receiveCommentsFailure(e));
  }
}

export function* fetchCommentsSaga() {
  yield takeLatest(REQUEST_COMMENTS, onRequestComments);
}
