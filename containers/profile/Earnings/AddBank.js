import React, { Fragment } from "react";
import FormChannel from "./BankForm";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBankDetails } from "../../../store/actions/user/payment";

const CreateBank = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Add Bank Details</Button>

      <FormChannel
        open={open}
        buttonName="Create"
        title="Add bank account"
        setOpen={setOpen}
        ouSubmit={async (formData) => {
          dispatch(addBankDetails(formData));
        }}
      />
    </Fragment>
  );
};

export default CreateBank;
