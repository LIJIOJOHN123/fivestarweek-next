import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import validate from "validate.js";
import { getCookie } from "../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { channelCreateArticle } from "../../../store/actions/user/channel";

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

const ArticleCreate = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      link: "",
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
  const { link } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);
  const handleClose = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(channelCreateArticle(id, formData.values, channel.limit));
    await setFormData({ ...formData, values: { link: "" } });
  };
  const locale = useSelector((state) => state.locale);
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {locale.createPost}{" "}
      </Button>
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
            value={link || ""}
            onChange={handleChange}
            label="Link"
            margin="normal"
            variant="outlined"
            autoFocus
            fullWidth
            name="link"
            error={hasError("link")}
            helperText={hasError("link") ? formData.errors.link[0] : null}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
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
export default ArticleCreate;
