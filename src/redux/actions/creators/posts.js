import {
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE,
} from '../types/posts';

export const requestPosts = () => ({ type: REQUEST_POSTS });

export const receivePostsSuccess = (data) => ({
  type: RECEIVE_POSTS_SUCCESS,
  payload: { data },
});

export const receivePostsFailure = (error) => ({
  type: RECEIVE_POSTS_FAILURE,
  payload: { error },
});
