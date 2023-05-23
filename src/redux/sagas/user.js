import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { REQUEST_USER } from '../actions/types/user';
import {
  receiveUserSuccess,
  receiveUserFailure,
} from '../actions/creators/user';
import { getUserById } from '../../http/userAPI';

function* onRequestUser(action) {
  try {
    const data = yield call(getUserById, action.payload.userId);
    yield delay(500);
    yield put(receiveUserSuccess(data));
  } catch (e) {
    yield put(receiveUserFailure(e));
  }
}

export function* fetchUsersSaga() {
  yield takeLatest(REQUEST_USER, onRequestUser);
}
