import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { SetCard } from '../../models/set-card.interface';
import NewSetDialogForm from '../../components/newSetDialogForm/newSetDialogForm';
import { useSelector, useDispatch } from 'react-redux';
import { addSet } from '../../redux/actions';
import { ApplicationState } from '../../models/state.interfaces';

// eslint-disable-next-line no-undef
const AllSet = (): JSX.Element => {
  const sets = useSelector((state: ApplicationState) => state.setsReducer.sets);
  const dispatch = useDispatch();

  const createNewSet = (name: string) => {
    dispatch(addSet({ id: sets.length, title: name, flashcards: [] }));
  };

  return (
    <div data-cy="all-set">
      {sets.length === 0 ? (
        <h3> You don&apos;t have any cards 💔</h3>
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
