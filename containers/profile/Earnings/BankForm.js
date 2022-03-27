import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";

const schema = {};

const BankForm = ({ ouSubmit, open, title, buttonName, setOpen, datas }) => {
  let [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      bankName: "",
      accountNumber: "",
      IFSC: "",
      accountHolderName: "",
      payPal: "",
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
  const { bankName, accountNumber, IFSC, accountHolderName, payPal } =
    formData.values;

  const handleDown = (e) => {
    setOpen(false);
  };
  const handleClose = async (event) => {
    handleDown();
    setFormData({ ...formData, values: { ...formData.values } });
    await ouSubmit(formData.values);
    await setFormData({
      ...formData,
      values: {
        bankName: "",
        accountNumber: "",
        IFSC: "",
        accountHolderName: "",
        payPal,
      },
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
            value={bankName || ""}
            onChange={handleChange}
            id="bankName"
            label="Bank Name"
            type="bankName"
            margin="normal"
            variant="outlined"
            fullWidth
            name="bankName"
          />
          <TextField
            value={accountNumber || ""}
            onChange={handleChange}
            id="accountNumber"
            label="Account Number"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="accountNumber"
          />
          <TextField
            value={IFSC || ""}
            onChange={handleChange}
            id="IFSC"
            label="IFSC"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="IFSC"
          />
          <TextField
            value={accountHolderName || ""}
            onChange={handleChange}
            id="accountHolderName"
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="accountHolderName"
          />
          <TextField
            value={payPal || ""}
            onChange={handleChange}
            id="payPal"
            label="Paypal"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="payPal"
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
            {buttonName}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
  return <Fragment>{view}</Fragment>;
};

export default BankForm;
