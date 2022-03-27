import React, { Fragment } from "react";
import FormChannel from "./Form";
import { useDispatch } from "react-redux";
import { createArticleSponsore } from "../../../store/actions/user/sponsor";

const CreateArticleSponsore = ({ ids }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <FormChannel
        ids={ids}
        buttonName="Create"
        titles="create new advertisment"
        ouSubmit={async (formData) => {
          dispatch(createArticleSponsore(formData));
        }}
      />
    </Fragment>
  );
};

export default CreateArticleSponsore;
