import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ApplicationState, ISetsState } from '../../models/state.interfaces';
import { SetCard } from '../../models/set-card.interface';
import { useLocation } from 'react-router-dom';

const Study = () => {
  const dispatch = useDispatch();

  const location = useLocation().pathname.split('/');

  const sets = useSelector<ApplicationState, ISetsState>(
    (state) => state.setsReducer
  );

  //   const set: number = Number(location[2]);
  //   const flashCardIndex = location[3];
  //   const keyword = location[4];

  return (
    <div data-cy="study" className="study">
      <p>XD</p>
    </div>
  );
};

export default Study;
