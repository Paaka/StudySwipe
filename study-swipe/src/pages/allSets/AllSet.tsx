import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@mui/material';
import { SetCard } from '../../models/set-card.interface';

const AllSet = (): JSX.Element => {
  const [sets, setSets]: any[] = useState([]);

  const createNewSet = () => {
    setSets([{ title: 'New' }, ...sets]);
  };

  return (
    <div data-cy="all-set">
      {sets.map((set: SetCard, i: number) => (
        <Link to={'/set'} key={i}>
          <Card data-cy="set-card">{set.title}</Card>
        </Link>
      ))}
      <Button data-cy="add-set-btn" variant="outlined" onClick={createNewSet}>
        Add set
      </Button>
    </div>
  );
};

export default AllSet;
