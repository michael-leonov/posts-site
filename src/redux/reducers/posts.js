/* eslint-disable default-param-last */
import {
  REQUEST_POSTS,
  RECEIVE_POSTS_FAILURE,
  RECEIVE_POSTS_SUCCESS,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS_SUCCESS,
  RECEIVE_COMMENTS_FAILURE,
} from '../actions/types/posts';

const initialState = { data: [], error: null, loading: false, comments: [] };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, error: null, loading: true };

    case RECEIVE_POSTS_SUCCESS:
      return { ...state, data: action.payload, error: null, loading: false };

    case RECEIVE_POSTS_FAILURE:
      return { ...state, data: [], error: action.payload, loading: false };

    case REQUEST_COMMENTS:
      return { ...state, error: null, loading: true };

    case RECEIVE_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        comments: action.payload,
      };

    case RECEIVE_COMMENTS_FAILURE:
      return { ...state, error: action.payload, loading: false, comments: [] };

    default:
      return state;
  }
}
