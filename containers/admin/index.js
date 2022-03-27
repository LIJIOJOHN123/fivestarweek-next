import { Fragment } from "react";
import React from "react";
import Router from "next/router";
import { Button } from "@mui/material";

const Menubar = () => {
  return (
    <Fragment>
      <Button onClick={() => Router.push("/master/user")}>User </Button>
      <Button onClick={() => Router.push("/master/channel")}>Channel </Button>
      <Button onClick={() => Router.push("/master/article")}>Article </Button>
      <Button onClick={() => Router.push("/master/comment")}>Comment</Button>
      <Button onClick={() => Router.push("/master/reply")}>Reply</Button>
      <Button onClick={() => Router.push("/master/sponsore/channel")}>
        Sponsore{" "}
      </Button>
      <Button onClick={() => Router.push("/master/violation/article")}>
        Violation{" "}
      </Button>
      <Button onClick={() => Router.push("/master/payment")}>Payment </Button>
      <Button onClick={() => Router.push(`/master/score`)}>Score</Button>
      <Button onClick={() => Router.push(`/master/earn`)}>Earning</Button>
      <Button onClick={() => Router.push(`/master/survey`)}>Survey</Button>
      <Button onClick={() => Router.push(`/master/premium`)}>Premium</Button>
      <Button onClick={() => Router.push(`/master/publisher`)}>
        Publisher
      </Button>
      <Button onClick={() => Router.push(`/master/category`)}>Category</Button>
    </Fragment>
  );
};
export default Menubar;
