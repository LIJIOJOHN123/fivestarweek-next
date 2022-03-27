import React from "react";
import { withStyles, makeStyles } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AvatarEdit from "./ChannelCropper";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyle = makeStyles((theme) => ({
  camera: {
    color: "white",
    marginLeft: 110,
    marginTop: -40,
  },
}));

const DialogTitles = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const DialogContents = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);

const DialogActionss = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions);

export default function CustomizedDialogs({ id }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Box textAlign="center">
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={(() => handleClick(), () => handleClickOpen())}
          align="center"
        >
          <CameraAltIcon
            aria-controls="fade-menu"
            align="center"
            aria-haspopup="true"
            className={classes.camera}
          />
        </Button>
      </Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitles id="customized-dialog-title" onClose={handleClose}>
          Change avatar
        </DialogTitles>
        <DialogContents dividers>
          <AvatarEdit id={id} setOpen={setOpen} />
        </DialogContents>
        <DialogActionss></DialogActionss>
      </Dialog>
    </div>
  );
}
