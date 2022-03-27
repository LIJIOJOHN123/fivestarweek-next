import React from "react";
import { Fragment } from "react";
import Table from "./Table";
import InfoChannelAd from "./Info";
import { Typography } from "@mui/material";
const ChannelPublisherId = ({ sponsoredChannel }) => {
  return (
    <Fragment>
      <InfoChannelAd sponsoredChannel={sponsoredChannel} />
      <div style={{ marginLeft: 15 }}>
        <Typography color="primary" variant="h6">
          Visitor report{" "}
        </Typography>
        <Table sponsoredChannel={sponsoredChannel} />
      </div>
      <br />
    </Fragment>
  );
};

export default ChannelPublisherId;
