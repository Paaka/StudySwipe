import { combineReducers } from 'redux';
import {
  ActionTypes,
  IncrementAction,
  DecrementAction,
  AddSetAction,
} from './actions';
import { SetCard } from '../models/set-card.interface';

export interface ApplicationState {
  setsReducer: ISetsState;
}

export interface ISetsState {
  count: number;
  sets: SetCard[];
}

const initialState: ISetsState = {
  count: 0,
  sets: [{ id: 0, title: 'Example Set' }],
};

const counterReducer = (
  state: ISetsState = initialState,
  action: IncrementAction | DecrementAction | AddSetAction
): ISetsState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionTypes.ADD_SET: {
      console.log(action);
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
  setsReducer: counterReducer,
});

export default rootReducer;
