import { Button, Card, IconButton, Input } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IFlashcard } from '../../models/flashcard.interface';
import './Set.scss';
import DialogForm from '../../components/dialogForm/dialogForm';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../models/state.interfaces';
import { SetCard } from '../../models/set-card.interface';
import { useDispatch } from 'react-redux';
import { addFlashCard } from '../../redux/actions';

const Set = () => {
  const [keyword, setKeyword] = useState('');
  const [definition, setDefinition] = useState('');

  const dispatch = useDispatch();
  const setId: number = Number(useLocation().pathname.split('/')[2]);
  const sets = useSelector<ApplicationState, SetCard>(state => state.setsReducer.sets[setId]) as SetCard;



  const onSaveCallback = () => {
    dispatch(addFlashCard({ id: `unique-${new Date().getMilliseconds}`, keyword, definition }, setId));
    setKeyword('');
    setDefinition('');
  };

  const onKeyDownHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    method: any
  ) => {
    method(event.target.value);
  };

  return (
    <div data-cy="set" className="set">
      <Link to="/set/3/2">
        <Button>Go to specyfic button</Button>
      </Link>
      <DialogForm
        buttonTitle="Add set"
        dialogTitle="Add new flashcard"
        onSaveCallback={onSaveCallback}
      >
        <div className="form-column">
          <Input
            placeholder="Keyword"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              onKeyDownHandler(e, setKeyword)
            }
            value={keyword}
            required
          ></Input>
          <Input
            placeholder="Definition"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              onKeyDownHandler(e, setDefinition)
            }
            value={definition}
            required
          ></Input>
        </div>
      </DialogForm>
      <div className="wrapper">
        <div className="wrapper__first-row">
          <IconButton size="large" color="primary">
            <AddIcon></AddIcon>
          </IconButton>
          <Link to={'edit'}>
            <IconButton size="large" color="primary">
              <ModeEditIcon></ModeEditIcon>
            </IconButton>
          </Link>
        </div>
        <div className="wrapper__list">
          <h1>Keyword</h1>
          {sets.flashcards.map(flashCard => (
            <Card className="wrapper__list__item" key={flashCard.id}>
              {flashCard.keyword}
            </Card>
          ))}
        </div>
        <div className="wrapper__list">
          <h1>Definition</h1>
          {sets.flashcards.map(flashCard => (
            <Card className="wrapper__list__item" key={flashCard.id}>
              {flashCard.definition}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Set;
