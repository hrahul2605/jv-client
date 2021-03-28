import { AnyAction } from 'redux';
import {
  RESET_NEW_POLL,
  SET_NEW_POLL_DETAILS,
  SET_NEW_POLL_ID,
  SET_NEW_POLL_RIVALS,
} from '../actions/actionTypes';
import { PollsInitialState } from './types';

const initialState: PollsInitialState = {
  newPoll: {
    title: '',
    description: '',
    rivals: [{ key: Date.now().toString(), title: '' }],
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
  },
};

const pollsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_NEW_POLL_DETAILS:
      return {
        ...state,
        newPoll: {
          ...state.newPoll,
          title: action.details.title,
          description: action.details.description,
          startTime: action.details.startTime,
          endTime: action.details.endTime,
        },
      };
    case SET_NEW_POLL_RIVALS:
      return {
        ...state,
        newPoll: {
          ...state.newPoll,
          rivals: [...action.rivals],
        },
      };
    case SET_NEW_POLL_ID:
      return {
        ...state,
        newPoll: {
          ...state.newPoll,
          id: action.id,
        },
      };
    case RESET_NEW_POLL:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default pollsReducer;
