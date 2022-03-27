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
import { passwordChange } from "../../../store/actions/user/auth";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function PasswordChange({ profileUser }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setFormData] = React.useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const { email, oldPassword, newPassword } = data;
  const handleClickOpen = () => {
    setFormData({
      email: profileUser.email,
    });
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };

  const handleChange = (email) => (e) => {
    setFormData({ ...data, [email]: e.target.value });
  };
  const dispatch = useDispatch();
  const submitHandleClose = async () => {
    popupClose();
    dispatch(passwordChange(data));
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Chage Password
      </Button>
      <Dialog
        open={open}
        onClose={popupClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <TextField
            label="Email"
            value={email}
            type="email"
            disabled={true}
            margin="normal"
            onChange={handleChange("email")}
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            label="Exsting Password"
            value={oldPassword}
            type="password"
            margin="normal"
            onChange={handleChange("oldPassword")}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="New Password"
            value={newPassword}
            type="password"
            margin="normal"
            onChange={handleChange("newPassword")}
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
