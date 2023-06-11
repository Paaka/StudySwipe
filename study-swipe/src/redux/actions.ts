import { SetCard } from '../models/set-card.interface';

export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  ADD_SET = 'ADD_SET',
}

export interface IncrementAction {
  type: ActionTypes.INCREMENT;
}

export interface DecrementAction {
  type: ActionTypes.DECREMENT;
}

export interface AddSetAction {
  type: ActionTypes.ADD_SET;
  newCard: SetCard;
}

export const increment = (): IncrementAction => ({
  type: ActionTypes.INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: ActionTypes.DECREMENT,
});

export const addSet = (card: SetCard): AddSetAction => ({
  type: ActionTypes.ADD_SET,
  newCard: card,
});
