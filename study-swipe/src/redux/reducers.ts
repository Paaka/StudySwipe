import { combineReducers } from 'redux';
import { ActionTypes, IncrementAction, DecrementAction } from './actions';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: IncrementAction | DecrementAction
): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
