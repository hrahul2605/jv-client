import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_USER,
  LOGOUT_USER,
  SET_AUTHENTICATED,
  SET_USER,
} from '../actions/actionTypes';
import { getUser, logoutUser } from '../api/user';

const handleGetUser = function* handleGetUser() {
  try {
    const user = yield call(getUser);
    if (user?.googleID) {
      yield put({ type: SET_USER, user });
      yield put({ type: SET_AUTHENTICATED, authenticated: true });
    }
  } catch (e) {
    //   do something
  }
};

const handleLogoutUser = function* handleLogoutUser() {
  try {
    yield call(logoutUser);
  } catch (e) {
    // do something
  }
};

const root = function* root() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(LOGOUT_USER, handleLogoutUser);
};

export default root;
