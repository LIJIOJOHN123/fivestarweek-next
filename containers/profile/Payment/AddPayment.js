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
import axios from "axios";
import Router from "next/router";

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

  const { amount } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const tokens = getCookie("token");
  const handleClose1 = async () => {
    setOpen(false);
    const res = await axios.post(
      `${process.env.SERVER_API}/addpayment`,
      {
        amount,
        purpose: "Amount added to account",
        redirect_url: `http://localhost:3000/payment`,
        webhook_url: "/webhook",
      },
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    Router.push(res.data);
  };
  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add amount
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            While coping link from third party websites make sure you copy them
            fully and correctly.
          </DialogContentText>
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
          <Button onClick={handleClose1} color="primary">
            Sumbit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PaymentAdd;
