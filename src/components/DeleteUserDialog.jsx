import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteUserDialog({ openDeleteUserDialog, delHandler }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (openDeleteUserDialog) {
      setOpen(true)
    }
  }, [openDeleteUserDialog])
  
  const handleClose = (e) => {   
    if (e.target.firstChild.data === "Agree") {
      delHandler(openDeleteUserDialog)
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>Really?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose(e)}>Disagree</Button>
          <Button onClick={(e) => handleClose(e)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
