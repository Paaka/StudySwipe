/* eslint-disable no-unused-vars */
import { IFlashcard } from '../flashcard.interface';
import { SetCard } from '../set-card.interface';

export enum ActionTypes {
  ADD_SET = 'ADD_SET',
  ADD_FLASHCARD = 'ADD_FLASHCARD',
  SET_FLASHCARD_DEFINITION = 'SET_FLASHCARD_DEFINITION',
  SET_FLASHCARD_KEYWORD = 'SET_FLASHCARD_KEYWORD',
}

export interface AddSetAction {
  type: ActionTypes.ADD_SET;
  newCard: SetCard;
}

export interface AddFlashcardAction {
  type: ActionTypes.ADD_FLASHCARD;
  newFlashCard: IFlashcard;
  setId: number;
}

export interface SetFlashcardDefininitionAction {
  type: ActionTypes.SET_FLASHCARD_DEFINITION;
  updatedFlashCard: IFlashcard;
  setId: number;
}

export interface SetFlashcardKeywordAction {
  type: ActionTypes.SET_FLASHCARD_KEYWORD;
  updatedFlashCard: IFlashcard;
  setId: number;
}
