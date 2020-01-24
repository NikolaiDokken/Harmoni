import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem, Menu } from "@material-ui/core";
import EventService from "../../service/events";
import MailingService from "../../service/mailing";

interface AlertDialog {
  eventID: number;
  open:boolean;
  handleAlert:any;
}


export default function AlertDialog({eventID, open, handleAlert}: AlertDialog){
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [choice, setChoice] = useState(0);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = () => {
    if (choice === 1) {
      EventService.deleteEvent(eventID).then(
        () => (window.location.hash = "#/")
      );
    } else if (choice === 2) {
      EventService.updateArchiveOne(eventID);
    } else if (choice === 3) {
      MailingService.cancelEventMail(eventID).then(
        () => (window.location.hash = "#/")
      );
    } else {
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete settings"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete, archive or cancel this event?
          </DialogContentText>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {choice === 1
              ? "Delete"
              : choice === 2
              ? "Archive"
              : choice === 3
              ? "Cancel event"
              : "Options"}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setChoice(1);
                handleClose();
              }}
            >
              Delete
            </MenuItem>
            <MenuItem
              onClick={() => {
                setChoice(2);
                handleClose();
              }}
            >
              Archive
            </MenuItem>
            <MenuItem
              onClick={() => {
                setChoice(3);
                handleClose();
              }}
            >
              Cancel event
            </MenuItem>
          </Menu>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => handleAlert(false)}>
            Cancel
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={() => {
              submit();
              handleAlert(false);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
