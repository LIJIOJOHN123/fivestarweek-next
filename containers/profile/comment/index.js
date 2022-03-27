import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import CommentLists from "./List";
import { useSelector } from "react-redux";

const CommentList = () => {
  const locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      <Typography variant="h6" color="primary" style={{ marginLeft: 20 }}>
        {locale.mycomments}
      </Typography>
      <CommentLists />
    </Fragment>
  );
};

export default CommentList;
