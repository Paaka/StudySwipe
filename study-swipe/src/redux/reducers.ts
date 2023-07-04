import { combineReducers } from 'redux';
import {
  ActionTypes,
  AddFlashcardAction,
  AddSetAction,
} from '../models/actions/set-actions.interfaces';
import { INITIAL_STATE } from '../constants/intial-state.constant';
import { ISetsState } from '../models/state.interfaces';

const setsReducer = (
  state: ISetsState = INITIAL_STATE,
  action: AddSetAction | AddFlashcardAction
): ISetsState => {
  switch (action.type) {
    case ActionTypes.ADD_SET: {
      return {
        ...state,
        sets: [action.newCard, ...state.sets],
      };
    }
    case ActionTypes.ADD_FLASHCARD: {
      const [setToBeUpdated] = state.sets.filter(set => set.id === action.setId);
      setToBeUpdated.flashcards = [action.newFlashCard, ...setToBeUpdated.flashcards];
      return state;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setsReducer: setsReducer,
});

export default rootReducer;
