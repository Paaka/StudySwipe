import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { ReactElement, useState } from 'react';

interface IButtonProps {
  children: ReactElement;
  buttonTitle: string;
  dialogTitle: string;
  onSaveCallback: () => void;
}

const DialogForm = (props: IButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onButtonClickedHandler = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onCancelHandler = () => {
    setIsDialogOpen(false);
  };

  const onSaveHandler = () => {
    props.onSaveCallback();
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onClose={onButtonClickedHandler}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={onSaveHandler}>Save</Button>
          <Button onClick={onCancelHandler}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" onClick={onButtonClickedHandler}>
        {props.buttonTitle}
      </Button>
      ;
    </>
  );
};

export default DialogForm;
