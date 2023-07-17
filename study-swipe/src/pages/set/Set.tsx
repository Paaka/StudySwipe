import { Card, IconButton, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Set.scss';
import DialogForm from '../../components/dialogForm/dialogForm';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../models/state.interfaces';
import { SetCard } from '../../models/set-card.interface';
import { addFlashCard } from '../../redux/actions';

const Set = () => {
  const [keyword, setKeyword] = useState('');
  const [definition, setDefinition] = useState('');

  const dispatch = useDispatch();
  const setId: number = Number(useLocation().pathname.split('/')[2]);
  const sets = useSelector<ApplicationState, SetCard>(
    (state) => state.setsReducer.sets[setId]
  ) as SetCard;

  const onSaveCallback = () => {
    dispatch(
      addFlashCard(
        { id: `unique-${new Date().getMilliseconds}`, keyword, definition },
        setId
      )
    );
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
      <div className="header">
        <Typography variant="h4">{sets.title}</Typography>
        <Link to="/all">
          <IconButton size="large" color="primary">
            <KeyboardReturnIcon></KeyboardReturnIcon>
          </IconButton>
        </Link>
      </div>
      <div className="wrapper">
        <div className="wrapper__first-row">
          <DialogForm
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
          <Link to={'edit'}>
            <IconButton size="large" color="primary">
              <ModeEditIcon></ModeEditIcon>
            </IconButton>
          </Link>
        </div>
        <div className="wrapper__list">
          <Typography variant="h5">Keyword</Typography>
          {sets.flashcards.map((flashCard, i) => (
            <div className="listItem" key={flashCard.id}>
              <Link to={`/set/${setId}/${i}/keyword`}>
                <Card className="wrappper__list__card">
                  {flashCard.keyword}
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <div className="wrapper__list">
          <Typography variant="h5">Definition</Typography>
          {sets.flashcards.map((flashCard, i) => (
            <div className="listItem" key={flashCard.id}>
              <Link to={`/set/${setId}/${i}/definition`}>
                <Card>{flashCard.definition}</Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Set;
