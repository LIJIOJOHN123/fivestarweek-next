import React, { Fragment } from "react";
import FormChannel from "./Form";
import { useDispatch } from "react-redux";
import { createChannelSponsore } from "../../../store/actions/user/sponsor";

const CreateChannelSponsore = ({ ids }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <FormChannel
        ids={ids}
        buttonName="Create"
        titles="create new advertisment"
        ouSubmit={async (formData) => {
          dispatch(createChannelSponsore(formData));
        }}
      />
    </Fragment>
  );
};

export default CreateChannelSponsore;
