import React from 'react';
import { useLocation } from 'react-router-dom';

const EditSet = () => {
  const currrentEditID = useLocation().pathname.split('/')[2];

  return <h3>Edit Set here ! {currrentEditID}</h3>;
};

export default EditSet;
