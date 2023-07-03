import { IFlashcard } from "../models/flashcard.interface";
import { ISetsState } from "../models/state.interfaces";

export const EXAMPLE_FLASHCARDS: IFlashcard[] = [
    {
        id: 'unique-11',
        keyword:'Banana',
        definition:'Yellow fruit',
    },
    {
        id: 'unique-12',
        keyword: 'Strawberry',
        definition:'Sweet red fruit.'
    }
]

export const INITIAL_STATE: ISetsState = {
    sets: [{ id: 0, title: 'Example Set', flashcards: EXAMPLE_FLASHCARDS }],
  };