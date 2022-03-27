import React, { Fragment } from "react";
import FormChannel from "./Form";
import { Button } from "@mui/material";
import { channelCreate } from "../../../store/actions/user/channel";
import { useDispatch, useSelector } from "react-redux";

const CreateChannel = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      <Button
        style={{ marginLeft: 20, marginBottom: 20 }}
        onClick={handleClickOpen}
        color="primary"
        variant="contained"
      >
        {locale.createNewChannel}{" "}
      </Button>
      <FormChannel
        open={open}
        buttonName="Create"
        title="Create New Channel"
        setOpen={setOpen}
        ouSubmit={async (formData) => {
          dispatch(channelCreate(formData));
        }}
      />
    </Fragment>
  );
};

export default CreateChannel;
