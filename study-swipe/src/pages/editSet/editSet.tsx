import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Input } from '@mui/material';
import './editSet.scss'
import { ApplicationState } from '../../models/state.interfaces';

const EditSet = () => {
  const dispatch = useDispatch();
  const currrentEditID = useLocation().pathname.split('/')[2];
  const set = useSelector((state: ApplicationState) => state.setsReducer.sets[0]);
  

  const onDefinitionInputHandler = ($event: any, id: any) => {
    console.log($event, id)
  }

  return (
    <div className='editSet'>
      <h3>Edit Set here ! {currrentEditID}</h3>
      <Link to={`/set/${currrentEditID}`}>
        <p>lol</p>
      </Link>
      <div className="listWrapper">
        <div>
        {set.flashcards.map(set =>
          <Card className='listWrapper__card' key={set.id}>
            <Input
              className='listWrapper__card__input'
              value={set.keyword}/>
        </Card>
        )}
        </div>
        <div>
        {set.flashcards.map(flashcard =>
        <Card className='listWrapper__card' key={flashcard.id}>
            <Input
              className='listWrapper__card__input'
              value={flashcard.definition}
              onInput={($event) => onDefinitionInputHandler($event, flashcard.id)}
            />
        </Card>
        )}
        </div>
      </div>
    </div>
  );
};

export default EditSet;
