import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ApplicationState, ISetsState } from '../../models/state.interfaces';
import { SetCard } from '../../models/set-card.interface';
import { useLocation } from 'react-router-dom';

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

  const test = () => {
    window.speechSynthesis.speak(speach);
  };

  return (
    <div data-cy="study" className="study">
      <p>{test2}</p>
      <button onClick={test}>Click me</button>
    </div>
  );
};

export default Study;
