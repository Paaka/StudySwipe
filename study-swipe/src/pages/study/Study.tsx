import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState, ISetsState } from '../../models/state.interfaces';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

const Study = () => {
  const location = useLocation().pathname.split('/');

  const state = useSelector<ApplicationState, ISetsState>(
    (state) => state.setsReducer
  );

  const setID: number = Number(location[2]);
  const flashCardIndex = Number(location[3]);

  const currentFlashcard = state.sets[setID].flashcards[flashCardIndex];
  const currentKeyword = location[4];

  // @ts-ignore
  const test2 = currentFlashcard[currentKeyword];
  const speach = new SpeechSynthesisUtterance(test2);

  const onSpeakHandler = () => {
    window.speechSynthesis.speak(speach);
  };

  const getlinkToReturn = () => {
    return `/set/${setID}`;
  };

  return (
    <>
      <Link to={getlinkToReturn()}>Go back</Link>
      <div data-cy="study" className="study">
        <Card>
          <Typography variant="h6">{currentKeyword}</Typography>
          <CardContent>{test2}</CardContent>
        </Card>
        <IconButton onClick={onSpeakHandler}>
          <VolumeUp></VolumeUp>
        </IconButton>
      </div>
    </>
  );
};

export default Study;
