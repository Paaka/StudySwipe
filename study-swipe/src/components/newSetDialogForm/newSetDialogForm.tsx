import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from '@mui/material';
import React, { useState } from 'react';

const NewSetDialogForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSet, setNewSet] = useState('');

  const toggleDialogState = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewSet(event.target.value);
  };

  const onSaveHandlder = (): void => {
    //TO DO: pass higher inoformation;
    onCloseHandler();
  };

  const onCloseHandler = (): void => {
    setIsDialogOpen(false);
    setNewSet('');
  };

  return (
    <>
      <Dialog open={isDialogOpen} onClose={onCloseHandler}>
        <DialogTitle>Create new set!</DialogTitle>
        <DialogContent>
          <Input
            onInput={onInputHandler}
            placeholder="Name of new set"
            value={newSet}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onSaveHandlder}
            disabled={newSet.length === 0}
            variant="contained"
          >
            SAVE
          </Button>
          <Button onClick={onCloseHandler}>CANCEL</Button>
        </DialogActions>
      </Dialog>
      <Button onClick={toggleDialogState}>Add set</Button>
    </>
  );
};

export default NewSetDialogForm;
