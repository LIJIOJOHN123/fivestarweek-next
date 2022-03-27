import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AvatarEdit from "./Cropper";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Box } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

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
    color: "blue",
    marginTop: 100,
    marginLeft: -100,
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
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
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change avatar
        </DialogTitle>
        <DialogContent dividers>
          <AvatarEdit id={id} setOpen={setOpen} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
