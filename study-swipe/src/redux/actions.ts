import { ActionTypes, AddFlashcardAction, AddSetAction } from '../models/actions/set-actions.interfaces';
import { IFlashcard } from '../models/flashcard.interface';
import { SetCard } from '../models/set-card.interface';

export const addSet = (card: SetCard): AddSetAction => ({
  type: ActionTypes.ADD_SET,
  newCard: card,
});

export const addFlashCard = (flashcard: IFlashcard, setId:number): AddFlashcardAction => ({
  type: ActionTypes.ADD_FLASHCARD,
  newFlashCard: flashcard,
  setId
})
