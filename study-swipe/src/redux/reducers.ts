import { combineReducers } from 'redux';
import {
  ActionTypes,
  AddFlashcardAction,
  AddSetAction,
  SetFlashcardDefininitionAction,
  SetFlashcardKeywordAction,
} from '../models/actions/set-actions.interfaces';
import { INITIAL_STATE } from '../constants/intial-state.constant';
import { ISetsState } from '../models/state.interfaces';

const setsReducer = (
  state: ISetsState = INITIAL_STATE,
  action: AddSetAction | AddFlashcardAction | SetFlashcardDefininitionAction | SetFlashcardKeywordAction
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
    case ActionTypes.SET_FLASHCARD_KEYWORD: {
      const [setToBeUpdated] = state.sets.filter(set => set.id === action.setId);
      const [flashcardToBeUpdated] = setToBeUpdated.flashcards.filter(flashcard => flashcard.id === action.updatedFlashCard.id);

      flashcardToBeUpdated.keyword = action.updatedFlashCard.keyword;
      state.sets[0].flashcards[0] = { ...flashcardToBeUpdated}
      console.log(state);
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
