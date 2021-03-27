import { AnyAction } from 'redux';
import { SET_AUTHENTICATED, SET_LOADING } from '../actions/actionTypes';
import { GlobalInitialState } from './types';

const initialState: GlobalInitialState = {
  loading: false,
  authenticated: false,
};

const globalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
};

export default globalReducer;
