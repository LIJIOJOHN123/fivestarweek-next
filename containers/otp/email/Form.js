import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";
import { getCookie } from "../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { channelCreateArticle } from "../../../store/actions/user/channel";
import { emailOTPverify } from "../../../store/actions/user/auth";

const token = getCookie("token");

const schema = {
  otp: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const EmailOTPVerfication = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      otp: "",
    },
    touched: {
      error: "It is not worth of it",
    },
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formData.values, schema);
    setFormData((formData) => ({
      ...formData,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formData.values]);

  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      values: {
        ...formData.values,
        [e.target.name]: e.target.value.replace(/[^0-9]/g),
      },
      touched: { ...formData.touched, [e.target.name]: true },
      error: false,
    }));
  };
  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { otp } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose1 = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(emailOTPverify(otp));
    await setFormData({ ...formData, values: { otp: "" } });
  };
  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <button variant="contained" color="primary" onClick={handleClickOpen}>
        Click here
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">OTP Vefication</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your opt correctly and and verify your account. Please
            check email for OPT. If you do not have OTP please request one.
          </DialogContentText>
          <TextField
            required
            value={otp || ""}
            onChange={handleChange}
            label="OTP"
            margin="normal"
            variant="outlined"
            autoFocus
            type="number"
            fullWidth
            name="otp"
            error={hasError("otp")}
            helperText={hasError("otp") ? formData.errors.otp[0] : null}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose1}
            color="primary"
            disabled={!formData.isValid}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EmailOTPVerfication;
