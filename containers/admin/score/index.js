import React, { Fragment } from "react";
import Term from "./Term";
import ScoreList from "./List";
import AddScore from "./create";
import RemoveScore from "./remove";
import { Button } from "@mui/material";
import Router from "next/router";
const Payment = () => {
  return (
    <Fragment>
      <div style={{ display: "flex", marginBottom: 30 }}>
        <AddScore />
        <RemoveScore />
        <Button onClick={() => Router.push("/master/score/pending")}>
          Score pending
        </Button>
      </div>
      <Term />
      <ScoreList />
    </Fragment>
  );
};

export default Payment;
