/* eslint-disable default-param-last */
import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS_SUCCESS,
  RECEIVE_COMMENTS_FAILURE,
} from '../actions/types/comments';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return { ...state, error: null, loading: true };

    case RECEIVE_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };

    case RECEIVE_COMMENTS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
}
