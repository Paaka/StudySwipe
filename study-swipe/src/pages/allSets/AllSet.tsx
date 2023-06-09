import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from '@mui/material';
import { SetCard } from '../../models/set-card.interface';
import NewSetDialogForm from '../../components/newSetDialogForm/newSetDialogForm';

const AllSet = (): JSX.Element => {
  const [newSet, setNewSet] = useState('');
  const [sets, setSets] = useState<SetCard[]>([{ id: 0, title: 'Test' }]);

  const createNewSet = (name: string) => {
    setSets([{ id: sets.length, title: name }, ...sets]);
    setNewSet('');
  };

  return (
    <div data-cy="all-set">
      {sets.length === 0 ? (
        <p> You don't have any cards 💔</p>
      ) : (
        sets.map((set: SetCard, i: number) => (
          <Link to={`/set/${set.id}`} key={i}>
            <Card data-cy="set-card">{set.title}</Card>
          </Link>
        ))
      )}
      <NewSetDialogForm createNewSet={createNewSet}></NewSetDialogForm>
    </div>
  );
};

export default AllSet;
