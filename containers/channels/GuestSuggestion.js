import React from "react";
import { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { useSelector } from "react-redux";

const SuggestedChannels = ({ channelSuggestion }) => {
  const channels = useSelector((state) => state.channel);

  return (
    <Fragment>
      {channelSuggestion.length > 3 && (
        <Fragment>
          <Grid container>
            {channelSuggestion.map((channel) => (
              <Fragment key={channel._id}>
                <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
                  <Card channelOne={channel} sponsore={true} />
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
