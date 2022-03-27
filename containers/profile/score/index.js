import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import TransactionTable from "./Table";

const ScoreFolder = () => {
  return (
    <Fragment>
      <Typography variant="h4" align="center">
        Scores Details
      </Typography>
      <br />
      <Typography align="center">
        Your score should be above 3000 points to enroll our revenue sharing
        programme.
      </Typography>
      <TransactionTable />
    </Fragment>
  );
};

export default ScoreFolder;
