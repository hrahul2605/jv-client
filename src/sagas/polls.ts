import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CREATE_POLL, SET_NEW_POLL_ID } from '../actions/actionTypes';
import { createPoll } from '../api/polls';

const handleCreatePoll = function* handleCreatePoll() {
  try {
    const { newPoll } = yield select(state => state.polls);
    const { googleID } = yield select(state => state.user.user);
    const data = {
      title: newPoll.title,
      rivals: newPoll.rivals.map((item: any) => {
        return { title: item.title };
      }),
      description: newPoll.description,
      userID: googleID,
    };
    const res = yield call(createPoll, data);
    if (res.id) {
      yield put({ type: SET_NEW_POLL_ID, id: res.id });
    }
  } catch (e) {
    //   do something
  }
};

const root = function* root() {
  yield takeLatest(CREATE_POLL, handleCreatePoll);
};

export default root;
