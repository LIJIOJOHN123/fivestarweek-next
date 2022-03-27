import { Typography } from "@mui/material";
import React, { Fragment } from "react";
const PageNotFound = () => {
  return (
    <Fragment>
      <Typography variant="h6" align="center" style={{ marginTop: 20 }}>
        404 - This page could not be found
      </Typography>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/Error_404-01.jpg"
          height="500"
        />
      </div>
      <Typography style={{ marginLeft: 10 }} align="center">
        If you see this page again and again please report to us. Email id is
        support@fivestarweek.com
      </Typography>
    </Fragment>
  );
};

export default PageNotFound;
