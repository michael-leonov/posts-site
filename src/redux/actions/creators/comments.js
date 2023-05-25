import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS_SUCCESS,
  RECEIVE_COMMENTS_FAILURE,
} from '../types/comments';

export const requestComments = (postId) => ({
  type: REQUEST_COMMENTS,
  payload: { postId },
});

export const receiveCommentsSuccess = (data, postId) => ({
  type: RECEIVE_COMMENTS_SUCCESS,
  payload: { data, postId },
});

export const receiveCommentsFailure = (error) => ({
  type: RECEIVE_COMMENTS_FAILURE,
  payload: { error },
});
