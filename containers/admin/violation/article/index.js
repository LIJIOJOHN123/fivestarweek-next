import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { articleViolationList } from "../../../../store/actions/admin/user";
import List from "./List";
import ViolationBar from "../index";
const ArticleViolation = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(articleViolationList());
  }, []);
  return (
    <Fragment>
      <ViolationBar />
      <List />
    </Fragment>
  );
};

export default ArticleViolation;
