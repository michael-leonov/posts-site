/* eslint-disable default-param-last */
import {
  REQUEST_USER,
  RECEIVE_USER_SUCCESS,
  RECEIVE_USER_FAILURE,
} from '../actions/types/user';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, error: null, loading: true };

    case RECEIVE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };

    case RECEIVE_USER_FAILURE:
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
