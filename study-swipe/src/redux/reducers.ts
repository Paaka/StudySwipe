import { combineReducers } from 'redux';
import {
  ActionTypes,
  AddSetAction,
} from '../models/actions/set-actions.interfaces';
import { INITIAL_STATE } from '../constants/intial-state.constant';
import { ISetsState } from '../models/state.interfaces';

const setsReducer = (
  state: ISetsState = INITIAL_STATE,
  action: AddSetAction
): ISetsState => {
  switch (action.type) {
    case ActionTypes.ADD_SET: {
      return {
        ...state,
        sets: [action.newCard, ...state.sets],
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setsReducer: setsReducer,
});

export default rootReducer;
