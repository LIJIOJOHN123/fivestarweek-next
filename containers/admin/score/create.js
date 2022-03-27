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
import { scoreAdd } from "../../../store/actions/admin/user";

const token = getCookie("token");

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
      points: 0,
      activityL: "",
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

  const { points, description, user, activity } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);
  const handleClose = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(scoreAdd(user, { points, description, user, activity }));
    await setFormData({ ...formData, values: { link: "" } });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add score
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
            value={points || ""}
            onChange={handleChange}
            label="points"
            margin="normal"
            variant="outlined"
            type="number"
            name="points"
            fullWidth
          />
          <TextField
            required
            value={activity || ""}
            onChange={handleChange}
            label="activity"
            margin="normal"
            variant="outlined"
            type="text"
            name="activity"
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
