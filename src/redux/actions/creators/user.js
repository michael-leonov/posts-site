import {
  REQUEST_USER,
  RECEIVE_USER_SUCCESS,
  RECEIVE_USER_FAILURE,
} from '../types/user';

export const requestUser = (userId) => ({
  type: REQUEST_USER,
  payload: { userId },
});

export const receiveUserSuccess = (data) => ({
  type: RECEIVE_USER_SUCCESS,
  payload: { data },
});

export const receiveUserFailure = (error) => ({
  type: RECEIVE_USER_FAILURE,
  payload: { error },
});
