import { Button, Card, Input } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IFlashcard } from '../../models/flashcard.interface';
import './Set.scss';
import DialogForm from '../../components/dialogForm/dialogForm';
import { event } from 'cypress/types/jquery';

const Set = () => {
  const [keyword, setKeyword] = useState('');
  const [definition, setDefinition] = useState('');

  const [flashCards, setFlashCards] = useState<IFlashcard[]>([
    { id: '0', keyword: 'Subaru 22B', definition: 'Best car ever produced' },
  ]);

  const onSaveCallback = () => {
    setFlashCards([...flashCards, { id: '1', keyword, definition }]);
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
        <div className="wrapper__list">
          <h1>Keyword</h1>
          {flashCards.map((flashCard, i) => (
            <Card key={i}>{flashCard.keyword}</Card>
          ))}
        </div>
        <div className="wrapper__list">
          <h1>Definition</h1>
          {flashCards.map((flashCard, i) => (
            <Card key={i}>{flashCard.definition}</Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Set;
