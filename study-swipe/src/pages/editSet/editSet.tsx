import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EditSet = () => {
  const currrentEditID = useLocation().pathname.split('/')[2];

  return (
    <>
      <h3>Edit Set here ! {currrentEditID}</h3>
      <Link to={`/set/${currrentEditID}`}>
        <p>Go back</p>
      </Link>
    </>
  );
};

export default EditSet;
