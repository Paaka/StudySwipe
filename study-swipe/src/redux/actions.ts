import { ActionTypes, AddSetAction } from '../models/actions/set-actions.interfaces';
import { SetCard } from '../models/set-card.interface';

export const addSet = (card: SetCard): AddSetAction => ({
  type: ActionTypes.ADD_SET,
  newCard: card,
});
