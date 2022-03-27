import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CommentList from "./List";
const Comment = () => {
  const comment = useSelector((state) => state.comment);
  return (
    <Fragment>
      <CommentList comments={comment} />
    </Fragment>
  );
};

export default Comment;
