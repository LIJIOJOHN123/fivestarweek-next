import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { replyViolationList } from "../../../../store/actions/admin/user";
import ViolationBar from "../index";
import List from "./List";

const ReplyViolation = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(replyViolationList());
  }, []);
  return (
    <Fragment>
      <ViolationBar />
      <List />
    </Fragment>
  );
};

export default ReplyViolation;
