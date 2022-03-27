import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelEdit } from "../../../store/actions/user/channel";
import FormChannel from "./Form";

const EditChannel = ({ id, open, setOpen }) => {
  const channelItems = useSelector((state) => state.channel.channelsCreated);
  const dispatch = useDispatch();
  const data = channelItems.find((ele) => ele._id === id);
  return (
    <Fragment>
      <FormChannel
        open={open}
        buttonName="Edit"
        title="Edit channel"
        setOpen={setOpen}
        channelData={data}
        ouSubmit={async (formData) => {
          setOpen(false);
          dispatch(channelEdit(formData, id));
        }}
      />
    </Fragment>
  );
};

export default EditChannel;
