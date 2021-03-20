import { all } from 'redux-saga/effects';

import user from './user';

const root = function* root() {
  yield all([user()]);
};

export default root;
