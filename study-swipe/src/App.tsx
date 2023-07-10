import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function App() {
  function hello() {
    console.log('hello');
  }

  return (
    <div>
      <Link to={'/all'}>
        <Button variant="contained" onClick={hello}>
          {' '}
          All sets!
        </Button>
      </Link>
    </div>
  );
}

export default App;
