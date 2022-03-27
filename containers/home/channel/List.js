import React from "react";
import { Fragment } from "react";
import { Grid } from "@mui/material";
// import Card from "../../05 channels/Card";

const SponsoredChannelList = ({ channels }) => {
  return (
    <Grid container>
      {channels.map((channel) => (
        <Fragment key={channel._id}>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            {/* <Card channelOne={channel} /> */}
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default SponsoredChannelList;
