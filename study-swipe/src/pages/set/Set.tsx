import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IFlashcard } from '../../models/flashcard.interface';

function Set() {
  const [flashCards, setFlashCards] = useState<IFlashcard[]>([
    { id: '0', keyword: 'Subaru 22B', definition: 'Best car ever produced' },
  ]);

  return (
    <div data-cy="set" className="set">
      <Link to="/set/3/2">
        <Button>Go to specyfic button</Button>
      </Link>
      <h1>Keyword</h1>
      {flashCards.map((flashCard) => (
        <Card>{flashCard.keyword}</Card>
      ))}
    </div>
  );
}

export default Set;
