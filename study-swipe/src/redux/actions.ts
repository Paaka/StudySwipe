export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface IncrementAction {
  type: ActionTypes.INCREMENT;
}

export interface DecrementAction {
  type: ActionTypes.DECREMENT;
}

export const increment = (): IncrementAction => ({
  type: ActionTypes.INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: ActionTypes.DECREMENT,
});
