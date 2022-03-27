import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { commentViolationList } from "../../../../store/actions/admin/user";
import ViolationBar from "../index";
import List from "./List";

const CommentViolation = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(commentViolationList());
  }, []);
  return (
    <Fragment>
      <ViolationBar />
      <List />
    </Fragment>
  );
};

export default CommentViolation;
