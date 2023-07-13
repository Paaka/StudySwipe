import { IFlashcard } from './flashcard.interface';

export interface SetCard {
  id: number;
  title: string;
  flashcards: IFlashcard[];
}
