import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ApplicationState } from '../../models/state.interfaces';

const EditSet = () => {
  const sets = useSelector((state: ApplicationState) => state.setsReducer.sets);

  const currrentEditID = useLocation().pathname.split('/')[2];

  return (
    <>
      <h3>Edit Set here ! {currrentEditID}</h3>
      <Link to={`/set/${currrentEditID}`}>
        <p>lol</p>
      </Link>
      <div className="wrapper">
        {sets.map(set => <p key={set.id}>{set.title}</p>)}
      </div>
    </>
  );
};

export default EditSet;
