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
import { earningRemove } from "../../../store/actions/admin/user";

const schema = {
  link: {
    presence: { allowEmpty: false, message: "is required" },
    url: {
      allowLocal: false,
      allowDataUrl: false,
    },
  },
};

const PaymentAdd = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      user: "",
      description: "",
      amount: 0,
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
      values: { ...formData.values, [e.target.name]: e.target.value },
      touched: { ...formData.touched, [e.target.name]: true },
      error: false,
    }));
  };

  const { amount, description, user } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(earningRemove(user, { user, amount, description }));
    await setFormData({ ...formData, values: { link: "" } });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Remove earning
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            While coping link from third party websites make sure you copy them
            fully and correctly.
          </DialogContentText>
          <TextField
            required
            value={user || ""}
            onChange={handleChange}
            label="User"
            margin="normal"
            variant="outlined"
            autoFocus
            name="user"
            fullWidth
          />
          <TextField
            value={description || ""}
            onChange={handleChange}
            label="Description"
            margin="normal"
            variant="outlined"
            fullWidth
            name="description"
          />
          <TextField
            required
            value={amount || ""}
            onChange={handleChange}
            label="amount"
            margin="normal"
            variant="outlined"
            type="number"
            name="amount"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PaymentAdd;
