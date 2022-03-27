import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";
const schema = {};

const WithdrawForm = ({
  ouSubmit,
  open,
  title,
  buttonName,
  setOpen,
  datas,
}) => {
  let [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      amount: 0,
      description: "Withdwal from FiveStarWeek account",
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
  const { amount } = formData.values;

  const handleDown = (e) => {
    setOpen(false);
  };
  const handleClose = async (event) => {
    handleDown();
    setFormData({ ...formData, values: { ...formData.values } });
    await ouSubmit({
      amount: parseInt(formData.values.amount),
      description: "Withdwal from FiveStarWeek account",
    });
    await setFormData({
      ...formData,
      values: { amount: 0, description: "" },
    });
  };

  const view = (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Withdrawal Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={amount || ""}
            onChange={handleChange}
            id="amount"
            label="Amount"
            type="number"
            margin="normal"
            variant="outlined"
            fullWidth
            name="amount"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDown} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            disabled={!formData.isValid}
          >
            Withdraw
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
  return <Fragment>{view}</Fragment>;
};

export default WithdrawForm;
