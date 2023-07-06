import React, { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Input } from '@mui/material';
import './editSet.scss'
import { ApplicationState } from '../../models/state.interfaces';
import { setFlashcardKeyword } from '../../redux/actions';

const EditSet = () => {
  const dispatch = useDispatch();
  const currrentEditID = useLocation().pathname.split('/')[2];
  const set = useSelector((state: ApplicationState) => state.setsReducer.sets[0]);
  
  const onKeywordInputHandler = ($event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFlashcard = { ...set.flashcards[index] };
    newFlashcard.keyword = $event.target.value
      
    dispatch(setFlashcardKeyword(newFlashcard, set.id))
  }

  const onDefinitionInputHandler = ($event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    console.log($event.target.value, id)
  }

  return (
    <div className='editSet'>
      <h3>Edit Set here ! {currrentEditID}</h3>
      <Link to={`/set/${currrentEditID}`}>
        <p>lol</p>
      </Link>
      <div className="listWrapper">
        <div>
        {set.flashcards.map((flashcard, index) =>
          <Card className='listWrapper__card' key={flashcard.id}>
            <Input
              className='listWrapper__card__input'
              value={flashcard.keyword}
              onInput={($event: React.ChangeEvent<HTMLInputElement>) => onKeywordInputHandler($event, index)}/>
        </Card>
        )}
        </div>
        <div>
        {set.flashcards.map(flashcard =>
        <Card className='listWrapper__card' key={flashcard.id}>
            <Input
              className='listWrapper__card__input'
              value={flashcard.definition}
              onInput={($event: React.ChangeEvent<HTMLInputElement>) => onDefinitionInputHandler($event, flashcard.id)}
            />
        </Card>
        )}
        </div>
      </div>
    </div>
  );
};

export default EditSet;
