import { IFlashcard } from "../flashcard.interface";
import { SetCard } from "../set-card.interface";

export enum ActionTypes {
  ADD_SET = 'ADD_SET',
  ADD_FLASHCARD = 'ADD_FLASHCARD'
  }
  
  export interface AddSetAction {
    type: ActionTypes.ADD_SET;
    newCard: SetCard;
  }

export interface AddFlashcardAction{
  type: ActionTypes.ADD_FLASHCARD;
  newFlashCard: IFlashcard;
  setId: number;
  }
  