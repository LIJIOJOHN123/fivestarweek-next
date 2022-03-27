import { Fragment } from "react";
import React from "react";
import Router from "next/router";
import { Button } from "@mui/material";

const ViolationBar = () => {
  return (
    <Fragment>
      <br />
      <Button onClick={() => Router.push("/master/violation/article")}>
        Article{" "}
      </Button>
      <Button onClick={() => Router.push("/master/violation/comment")}>
        Comment{" "}
      </Button>
      <Button onClick={() => Router.push("/master/violation/reply")}>
        Reply{" "}
      </Button>
    </Fragment>
  );
};
export default ViolationBar;
