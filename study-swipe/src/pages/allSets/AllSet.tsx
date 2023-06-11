import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from '@mui/material';
import { SetCard } from '../../models/set-card.interface';
import NewSetDialogForm from '../../components/newSetDialogForm/newSetDialogForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSet, increment } from '../../redux/actions';
import { ApplicationState } from '../../redux/reducers';

const AllSet = (): JSX.Element => {
  const sets = useSelector((state: any) => state.counter.sets);
  const dispatch = useDispatch();

  const [newSet, setNewSet] = useState('');

  const createNewSet = (name: string) => {
    dispatch(addSet({ id: sets.length, title: name }));
    setNewSet('');
  };

  return (
    <div data-cy="all-set">
      {sets.length === 0 ? (
        <h3> You don't have any cards 💔</h3>
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
