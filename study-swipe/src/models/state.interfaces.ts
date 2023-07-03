import { SetCard } from "./set-card.interface";

export interface ApplicationState {
    setsReducer: ISetsState;
  }
  
  export interface ISetsState {
    sets: SetCard[];
  }