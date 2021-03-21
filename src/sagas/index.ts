import { all } from 'redux-saga/effects';

import user from './user';
import polls from './polls';

const root = function* root() {
  yield all([user(), polls()]);
};

export default root;
