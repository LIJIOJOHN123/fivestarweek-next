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
import { profileEdit } from "../../../store/actions/user/auth";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function EditProfile({ profileUser }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setFormData] = React.useState({
    name: "",
    country: "",
    mobile: "",
    phoneCode: "",
    state: "",
    mobile: "",
    dateOfBirth: "",
  });
  const { name, userName, country, mobile, phoneCode, state, dateOfBirth } =
    data;
  const handleClickOpen = () => {
    setOpen(true);
    setFormData({
      name: profileUser.name,
      country: profileUser.country,
      mobile: profileUser.mobile,
      phoneCode: profileUser.phoneCode,
      state: profileUser.state,
      mobile: profileUser.mobile,
      dateOfBirth: profileUser.dateOfBirth,
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
    dispatch(profileEdit(data));
  };

  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Edit Profile
      </Button>
      <Dialog
        open={open}
        onClose={popupClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Name</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Profile</DialogContentText>
          <TextField
            autoFocus
            label="Name"
            value={name}
            type="name"
            margin="normal"
            onChange={handleChange("name")}
            variant="outlined"
            fullWidth
          />
          {/* <TextField
            label="Country"
            value={country}
            type="name"
            margin="normal"
            onChange={handleChange("country")}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="State"
            value={state}
            type="name"
            margin="normal"
            onChange={handleChange("state")}
            variant="outlined"
            fullWidth
          />
      */}
          {/* <TextField
            label="Country Code"
            value={phoneCode}
            type="name"
            margin="normal"
            onChange={handleChange("phoneCode")}
            variant="outlined"
            fullWidth
          /> */}
          <TextField
            label="Mobile"
            value={mobile}
            type="name"
            margin="normal"
            onChange={handleChange("mobile")}
            variant="outlined"
            fullWidth
          />
          {/* <TextField
            id="date"
            label="Birthday"
            type="date"
            fullWidth
            onChange={handleChange("dateOfBirth")}
            value={dateOfBirth}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
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
