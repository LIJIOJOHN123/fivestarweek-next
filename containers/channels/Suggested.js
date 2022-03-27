import React from "react";
import { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import { useSelector } from "react-redux";

const SuggestedChannels = () => {
  const channels = useSelector((state) => state.channel);

  return (
    <Fragment>
      {channels.channelSuggestion.length > 3 && (
        <Fragment>
          <Typography
            style={{
              margin: 20,
              color: "gray",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Suggested channels
          </Typography>
          <Grid container>
            {channels.channelSuggestion.map((channel) => (
              <Fragment key={channel._id}>
                <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
                  <Card channelOne={channel} />
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SuggestedChannels;
