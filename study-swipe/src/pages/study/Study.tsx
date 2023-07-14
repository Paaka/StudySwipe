import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ApplicationState, ISetsState } from '../../models/state.interfaces';
import { SetCard } from '../../models/set-card.interface';
import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Typography,
} from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

const Study = () => {
  const dispatch = useDispatch();

  const location = useLocation().pathname.split('/');

  const state = useSelector<ApplicationState, ISetsState>(
    (state) => state.setsReducer
  );

  const setID: number = Number(location[2]);
  const flashCardIndex = Number(location[3]);
  const keyword: string = location[4];

  const currentFlashcard = state.sets[setID].flashcards[flashCardIndex];
  const currentKeyword = location[4];

  //@ts-ignore
  const test2 = currentFlashcard[currentKeyword];
  let speach = new SpeechSynthesisUtterance(test2);

  const onSpeakHandler = () => {
    window.speechSynthesis.speak(speach);
  };

  return (
    <>
      <Link to="/set/0">Go back</Link>
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
