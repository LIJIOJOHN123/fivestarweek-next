import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import validate from "validate.js";

const schema = {
  comment: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 2,
    },
  },
};
const CommentForm = ({ postId, onSubmit, open, commentData, setOpen }) => {
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      title: commentData ? commentData.title : "",
      comment: commentData ? commentData.comment : "",
    },
    touched: { error: "Please give me something" },
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
    setFormData((formData) => ({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value },
      touched: { ...formData.touched, [e.target.name]: true },
    }));
  };
  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { title, comment } = formData.values;

  const handleDown = (e) => {
    setOpen(false);
  };

  const handleClose = async () => {
    handleDown();
    setFormData({ ...formData, values: { ...formData.values } });
    await onSubmit(formData.values, postId);
    await setFormData({ ...formData, values: { title: "", comment: "" } });
  };
  const view = (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Post comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Title"
            value={title || ""}
            type="email"
            margin="normal"
            name="title"
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Comment"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            name="comment"
            error={hasError("comment")}
            helperText={hasError("cooment") ? formData.errors.comment[0] : null}
            value={comment || ""}
            multiline={true}
            fullWidth
            rows={10}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDown} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            disabled={!formData.isValid}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );

  return <Fragment>{view}</Fragment>;
};
export default CommentForm;
