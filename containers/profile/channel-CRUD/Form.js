import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";
import { Typography } from "@mui/material";

const schema = {
  channel: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 15,
      minimum: 3,
    },
  },
  channelName: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
    length: {
      maximum: 15,
      minimum: 3,
      tooShort: "needs to have %{count} words or more",
    },
  },
};

const FormChannel = ({
  ouSubmit,
  open,
  title,
  buttonName,
  channelData,
  setOpen,
}) => {
  let [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      channel: channelData ? channelData.channel : "",
      channelName: channelData ? channelData.channelName : "",
      introduction: channelData ? channelData.introduction : "",
      keywords: channelData ? channelData.keywords : "",
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
  const { channel, channelName, introduction, keywords } = formData.values;

  const handleClose = (e) => {
    setOpen(false);
  };
  const handleClose1 = async (event) => {
    setFormData({ ...formData, values: { ...formData.values } });
    await ouSubmit(formData.values);
    setOpen(false);
    await setFormData({
      ...formData,
      values: { channel: "", channelName: "", introduction: "", keywords: "" },
    });
  };

  const view = (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={channel || ""}
            onChange={handleChange}
            id="channel"
            label="Name"
            error={hasError("channel")}
            type="emachannelil"
            margin="normal"
            variant="outlined"
            fullWidth
            name="channel"
            helperText={hasError("channel") ? formData.errors.channel[0] : null}
          />
          <TextField
            value={channelName || ""}
            onChange={handleChange}
            id="channelName"
            label="username"
            type="text"
            margin="normal"
            variant="outlined"
            error={hasError("channelName")}
            fullWidth
            name="channelName"
            helperText={
              hasError("channelName") ? formData.errors.channelName[0] : null
            }
          />
          <TextField
            value={introduction || ""}
            onChange={handleChange}
            id="introduction"
            label="Introduction"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="introduction"
            multiline="true"
            rows={4}
          />
          <Typography>
            NB:Itroduction about your channel and your contact details to
            publish advertisment.
          </Typography>
          <TextField
            value={keywords || ""}
            onChange={handleChange}
            id="kewords"
            label="Keywords"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="keywords"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose1}
            color="primary"
            variant="contained"
            disabled={!formData.isValid}
          >
            {buttonName}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
  return <Fragment>{view}</Fragment>;
};

export default FormChannel;
