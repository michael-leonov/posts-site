import {
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS_SUCCESS,
  RECEIVE_COMMENTS_FAILURE,
} from '../types/posts';

export const requestPosts = () => ({ type: REQUEST_POSTS });

export const receivePostsSuccess = (data) => ({
  type: RECEIVE_POSTS_SUCCESS,
  payload: data,
});

export const receivePostsFailure = (error) => ({
  type: RECEIVE_POSTS_FAILURE,
  payload: error,
});

export const requestComments = (postId) => ({ type: REQUEST_COMMENTS, postId });

export const receiveCommentsSuccess = (data) => ({
  type: RECEIVE_COMMENTS_SUCCESS,
  payload: data,
});

export const receiveCommentsFailure = (error) => ({
  type: RECEIVE_COMMENTS_FAILURE,
  payload: error,
});
