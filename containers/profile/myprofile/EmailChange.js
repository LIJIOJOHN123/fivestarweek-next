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
import { emailChange } from "../../../store/actions/user/auth";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function EmailChange({ profileUser }) {
  const [open, setOpen] = React.useState(false);
  const [data, setFormData] = React.useState({
    oldEmail: "",
    password: "",
    newEmail: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
    setFormData({ oldEmail: profileUser.email });
  };
  const { oldEmail, newEmail, password } = data;

  const popupClose = () => {
    setOpen(false);
  };

  const handleChange = (oldMail) => (e) => {
    setFormData({ ...data, [oldMail]: e.target.value });
  };
  const dispatch = useDispatch();
  const submitHandleClose = async () => {
    popupClose();
    dispatch(emailChange(data));
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Chage Email
      </Button>
      <Dialog
        open={open}
        onClose={popupClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Email</DialogTitle>
        <DialogContent>
          <TextField
            label="Existing Email"
            value={oldEmail}
            type="email"
            margin="normal"
            onChange={handleChange("oldMail")}
            variant="outlined"
            fullWidth
            disabled={true}
          />
          <TextField
            autoFocus
            label="Exsting Password"
            value={password}
            type="password"
            margin="normal"
            onChange={handleChange("password")}
            variant="outlined"
            fullWidth
          />

          <TextField
            required
            autoComplete="email"
            name="email"
            label="Email"
            margin="normal"
            onChange={handleChange("newEmail")}
            value={newEmail}
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
