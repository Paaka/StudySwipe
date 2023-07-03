import { SetCard } from "../set-card.interface";

export enum ActionTypes {
    ADD_SET = 'ADD_SET',
  }
  
  export interface AddSetAction {
    type: ActionTypes.ADD_SET;
    newCard: SetCard;
  }
  