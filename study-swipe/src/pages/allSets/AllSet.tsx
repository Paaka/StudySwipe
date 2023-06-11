import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input } from '@mui/material';
import { SetCard } from '../../models/set-card.interface';
import NewSetDialogForm from '../../components/newSetDialogForm/newSetDialogForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/actions';

const AllSet = (): JSX.Element => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const [newSet, setNewSet] = useState('');
  const [sets, setSets] = useState<SetCard[]>([{ id: 0, title: 'Test' }]);

  const createNewSet = (name: string) => {
    setSets([{ id: sets.length, title: name }, ...sets]);
    setNewSet('');
  };

  const onClickHandler = (): void => {
    dispatch(increment());
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
      <h1>{count}</h1>
      <Button variant="outlined" onClick={onClickHandler}>
        Increment
      </Button>
      <NewSetDialogForm createNewSet={createNewSet}></NewSetDialogForm>
    </div>
  );
};

export default AllSet;
