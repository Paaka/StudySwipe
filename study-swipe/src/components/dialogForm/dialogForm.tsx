import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React, { ReactElement, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

interface IButtonProps {
  children: ReactElement;
  buttonTitle?: string | null;
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
      {props.buttonTitle ? (
        <Button variant="contained" onClick={onButtonClickedHandler}>
          {props.buttonTitle}
        </Button>
      ) : (
        <IconButton
          size="large"
          color="primary"
          onClick={onButtonClickedHandler}
        >
          <AddIcon></AddIcon>
        </IconButton>
      )}
    </>
  );
};

export default DialogForm;
