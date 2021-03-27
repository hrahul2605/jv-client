import toast from 'react-hot-toast';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CREATE_POLL, SET_NEW_POLL_ID } from '../actions/actionTypes';
import { createPoll } from '../api/polls';
import { Rival } from '../reducers/types';

const handleCreatePoll = function* handleCreatePoll() {
  try {
    const { newPoll } = yield select(state => state.polls);
    const { googleID } = yield select(state => state.user.user);
    const data = {
      title: newPoll.title,
      rivals: newPoll.rivals.map((item: Rival) => {
        return { title: item.title };
      }),
      description: newPoll.description,
      googleID,
    };
    const res = yield call(createPoll, data);
    if (res.id) {
      yield put({ type: SET_NEW_POLL_ID, id: res.id });
    }
  } catch (e) {
    toast.error(e.response.data.message, { duration: 3000 });
  }
};

const root = function* root() {
  yield takeLatest(CREATE_POLL, handleCreatePoll);
};

export default root;
