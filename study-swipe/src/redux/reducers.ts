import { combineReducers } from 'redux';
import {
  ActionTypes,
  IncrementAction,
  DecrementAction,
  AddSetAction,
} from './actions';
import { SetCard } from '../models/set-card.interface';

export interface ApplicationState {
  count: number;
  sets: SetCard[];
}

const initialState: ApplicationState = {
  count: 0,
  sets: [{ id: 0, title: 'Example Set' }],
};

const counterReducer = (
  state: ApplicationState = initialState,
  action: IncrementAction | DecrementAction | AddSetAction
): ApplicationState => {
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
  counter: counterReducer,
});

export default rootReducer;
