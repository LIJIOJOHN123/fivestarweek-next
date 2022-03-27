import React, { Fragment } from "react";
import Term from "./Term";
import EarningList from "./List";
import AddEarning from "./create";
import RemoveEarning from "./remove";
import { Button } from "@mui/material";
import Router from "next/router";
const Payment = () => {
  return (
    <Fragment>
      <div style={{ display: "flex", marginBottom: 30 }}>
        <AddEarning />
        <RemoveEarning />
        <Button onClick={() => Router.push("/master/earn/withdrawal")}>
          Withdraw List
        </Button>
      </div>
      <Term />
      <EarningList />
    </Fragment>
  );
};

export default Payment;
