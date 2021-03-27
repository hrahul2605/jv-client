import { AnyAction } from 'redux';
import { SET_USER } from '../actions/actionTypes';
import { UserInitialState } from './types';

const initialState: UserInitialState = {
  user: undefined,
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
