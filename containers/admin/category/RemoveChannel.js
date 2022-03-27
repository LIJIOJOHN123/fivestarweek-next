import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoveChannel } from "../../../store/actions/admin/user";
// import { channelCreateArticle } from "../../../store/actions/user/channel";

const schema = {
  channel: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const CategoryRemoveChannel = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      channel: "",
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
  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { channel } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose1 = async () => {
    //     setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(categoryRemoveChannel(id, formData.values));
    await setFormData({
      ...formData,
      values: { category: "", localCategory: "" },
    });
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const locale = useSelector((state) => state.locale);

  return (
    <div>
      <Button onClick={handleClickOpen}>Remove channel</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit your link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            While coping link from third party websites make sure you copy them
            fully and correctly.
          </DialogContentText>
          <TextField
            required
            value={channel || ""}
            onChange={handleChange}
            label="Channel"
            margin="normal"
            variant="outlined"
            autoFocus
            fullWidth
            name="channel"
            error={hasError("channel")}
            helperText={hasError("channel") ? formData.errors.channel[0] : null}
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
export default CategoryRemoveChannel;
