import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS_SUCCESS,
  RECEIVE_COMMENTS_FAILURE,
} from '../types/comments';

export const requestComments = (postId) => ({
  type: REQUEST_COMMENTS,
  payload: { postId },
});

export const receiveCommentsSuccess = (data) => ({
  type: RECEIVE_COMMENTS_SUCCESS,
  payload: { data },
});

export const receiveCommentsFailure = (error) => ({
  type: RECEIVE_COMMENTS_FAILURE,
  payload: { error },
});
