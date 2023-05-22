/* eslint-disable default-param-last */
import {
  REQUEST_POSTS,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
} from '../actions/types/posts';

const initialState = { data: [], error: null, loading: false };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, error: null, loading: true };

    case RECEIVE_POSTS_SUCCESS:
      return { ...state, data: action.payload, error: null, loading: false };

    case RECEIVE_POSTS_FAILURE:
      return { ...state, data: {}, error: action.payload, loading: false };

    default:
      return state;
  }
}
