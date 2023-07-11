import React, { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, Input } from '@mui/material';
import './editSet.scss';
import { ApplicationState } from '../../models/state.interfaces';
import {
  addFlashCard,
  setFlashCardDefinition,
  setFlashcardKeyword,
} from '../../redux/actions';
import { IFlashcard } from '../../models/flashcard.interface';

const EditSet = () => {
  const dispatch = useDispatch();
  const currrentEditID = useLocation().pathname.split('/')[2];
  const set = useSelector(
    (state: ApplicationState) => state.setsReducer.sets[0]
  );

  const onKeywordInputHandler = (
    $event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFlashcard = { ...set.flashcards[index] };
    newFlashcard.keyword = $event.target.value;

    dispatch(setFlashcardKeyword(newFlashcard, set.id));
  };

  const onDefinitionInputHandler = (
    $event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFlashcard = { ...set.flashcards[index] };
    newFlashcard.definition = $event.target.value;

    dispatch(setFlashCardDefinition(newFlashcard, set.id));
  };

  const onAddNewEmptySetHandler = () => {
    const flashcard: IFlashcard = {
      id: `${new Date().valueOf()}`,
      definition: '',
      keyword: '',
    };

    console.log(flashcard);
    dispatch(addFlashCard(flashcard, set.id));
  };

  return (
    <div className="editSet">
      <h3>Edit Set here ! {currrentEditID}</h3>
      <Link to={`/set/${currrentEditID}`}>
        <p>lol</p>
      </Link>
      <div className="listWrapper">
        <div>
          <h2>Keyword</h2>
          {set.flashcards.map((flashcard, index) => (
            <Card className="listWrapper__card" key={flashcard.id}>
              <Input
                className="listWrapper__card__input"
                value={flashcard.keyword}
                onInput={($event: React.ChangeEvent<HTMLInputElement>) =>
                  onKeywordInputHandler($event, index)
                }
              />
            </Card>
          ))}
        </div>
        <div>
          <h2>Definition</h2>
          {set.flashcards.map((flashcard, index) => (
            <Card className="listWrapper__card" key={flashcard.id}>
              <Input
                className="listWrapper__card__input"
                value={flashcard.definition}
                onInput={($event: React.ChangeEvent<HTMLInputElement>) =>
                  onDefinitionInputHandler($event, index)
                }
              />
            </Card>
          ))}
        </div>
      </div>
      <Button className="editSet__button" onClick={onAddNewEmptySetHandler}>
        Add set !
      </Button>
    </div>
  );
};

export default EditSet;
