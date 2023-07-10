import {
  ActionTypes,
  AddFlashcardAction,
  AddSetAction,
  SetFlashcardDefininitionAction,
  SetFlashcardKeywordAction,
} from '../models/actions/set-actions.interfaces';
import { IFlashcard } from '../models/flashcard.interface';
import { SetCard } from '../models/set-card.interface';

export const addSet = (card: SetCard): AddSetAction => ({
  type: ActionTypes.ADD_SET,
  newCard: card,
});

export const addFlashCard = (
  newFlashCard: IFlashcard,
  setId: number
): AddFlashcardAction => ({
  type: ActionTypes.ADD_FLASHCARD,
  newFlashCard,
  setId,
});

export const setFlashCardDefinition = (
  updatedFlashCard: IFlashcard,
  setId: number
): SetFlashcardDefininitionAction => ({
  type: ActionTypes.SET_FLASHCARD_DEFINITION,
  updatedFlashCard,
  setId,
});

export const setFlashcardKeyword = (
  updatedFlashCard: IFlashcard,
  setId: number
): SetFlashcardKeywordAction => ({
  type: ActionTypes.SET_FLASHCARD_KEYWORD,
  updatedFlashCard,
  setId,
});
