import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';

import userReducer from './user';
import globalReducer from './global';
import pollsReducer from './polls';
import { DefaultRootState } from './types';
import { LOGOUT_USER } from '../actions/actionTypes';

const appReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  polls: pollsReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
export const useTypedSelector: TypedUseSelectorHook<DefaultRootState> = useSelector;
