import React from 'react';
import Button from '@mui/material/Button';

function App() {

  function hello(){
    console.log("hello")
  }

  return (
    <div>
      <Button variant="contained" onClick={hello}> Chnage-UI!</Button>
    </div>
  );
}

export default App;
