import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { profileEdit, userNameChange } from "../../../store/actions/user/auth";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function EditUsername({ profileUser }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setFormData] = React.useState({
    oldusername: "",
    newusername: "",
  });
  const { oldusername, newusername } = data;
  const handleClickOpen = () => {
    setOpen(true);
    setFormData({
      oldusername: profileUser.userName,
    });
  };

  const popupClose = () => {
    setOpen(false);
  };

  const handleChange = (name) => (e) => {
    setFormData({ ...data, [name]: e.target.value });
  };
  const dispatch = useDispatch();
  const submitHandleClose = async () => {
    popupClose();
    dispatch(userNameChange(data));
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Edit username
      </Button>
      <Dialog
        open={open}
        onClose={popupClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit username</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Profile</DialogContentText>
          <TextField
            disabled={true}
            label="old username"
            value={oldusername}
            type="name"
            margin="normal"
            onChange={handleChange("oldusername")}
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            label="new username"
            value={newusername}
            type="name"
            margin="normal"
            onChange={handleChange("newusername")}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={popupClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitHandleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
