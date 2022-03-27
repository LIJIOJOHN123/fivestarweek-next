import React, { Fragment } from "react";
import FormChannel from "./WithdrawalForm";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { withdrawalRequest } from "../../../store/actions/user/payment";

const Withdraw = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Withdraw</Button>

      <FormChannel
        open={open}
        buttonName="Create"
        title="Add bank account"
        setOpen={setOpen}
        ouSubmit={async (formData) => {
          dispatch(withdrawalRequest(formData));
        }}
      />
    </Fragment>
  );
};

export default Withdraw;
