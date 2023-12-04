import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ApplicationState, ISetsState } from '../../models/state.interfaces';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './Study.scss';

const Study = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/');
  const setID: number = Number(location[2]);
  const flashCardIndex = Number(location[3]);
  const keyword = location[4];
  const [currentKeyword, setCurrentKeyword] = useState(keyword);
  const [animate, setAnimate] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);

  const state = useSelector<ApplicationState, ISetsState>(
    (state) => state.setsReducer
  );

  const handleKeyDown = (event: React.KeyboardEvent | KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      moveToNextCard();
    }

    if (event.key === 'ArrowLeft') {
      moveToPreviousCard();
    }

    if (event.key === 'Enter') {
      setAnimate(true);
      console.log('enter');
      flipCard();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => handleKeyDown(event);

    window.addEventListener('keydown', handleKeyDownEvent);

    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [location, animate]);

  const currentFlashcard = state.sets[setID].flashcards[flashCardIndex];

  // @ts-ignore
  const speach = new SpeechSynthesisUtterance(currentFlashcard[currentKeyword]);

  const onSpeakHandler = () => {
    window.speechSynthesis.speak(speach);
  };

  const getlinkToReturn = () => {
    return `/set/${setID}`;
  };

  const flipCard = () => {
    setAnimate(true);
    const keyword = currentKeyword === 'keyword' ? 'definition' : 'keyword';
    setCurrentKeyword(keyword);
  };

  const moveToNextCard = () => {
    if (flashCardIndex + 1 === state.sets[setID].flashcards.length) {
      navigate(`/set/${setID}/0/${currentKeyword}`);
      return;
    }

    navigate(`/set/${setID}/${flashCardIndex + 1}/${currentKeyword}`);
  };

  const moveToPreviousCard = () => {
    if (flashCardIndex === 0) {
      const lastFlashcard = state.sets[setID].flashcards.length - 1;
      navigate(`/set/${setID}/${lastFlashcard}/${currentKeyword}`);
      return;
    }

    navigate(`/set/${setID}/${flashCardIndex - 1}/${currentKeyword}`);
  };

  const onShuffleHandler = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  return (
    <div className="study-containter">
      <div className="study-header">
        <Link to={getlinkToReturn()}>
          <IconButton color="primary">
            <KeyboardReturnIcon />
          </IconButton>
        </Link>
      </div>
      <div data-cy="study" className="study">
        <IconButton onClick={moveToPreviousCard}>
          <NavigateBeforeIcon />
        </IconButton>
        <div>
          <h3 className="study__heading">{currentKeyword}</h3>
          <Card
            className={`study-card ${animate ? 'animate' : ''}`}
            onClick={flipCard}
          >
            <Typography variant="h6">{currentKeyword}</Typography>
            <CardContent>
              {currentKeyword === 'keyword' ? (
                <p>{currentFlashcard.keyword}</p>
              ) : (
                <p>{currentFlashcard.definition}</p>
              )}
            </CardContent>
          </Card>
        </div>
        <IconButton onClick={moveToNextCard}>
          <NavigateNextIcon />
        </IconButton>
      </div>
      <div>
        <IconButton onClick={onSpeakHandler}>
          <VolumeUp />
        </IconButton>
        <IconButton
          onClick={onShuffleHandler}
          color={isShuffleOn ? 'primary' : 'default'}
        >
          {isShuffleOn ? <ShuffleOnIcon /> : <ShuffleIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Study;
