import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Theme/Loading";
import Card from "./Card";
const SponsoreChannel = () => {
  const channels = useSelector((state) => state.channel);
  const { channelSponsoreAuth, channelSponsoreGuest, loading } = channels;
  const channelSponsoredAuthLimit = 6 - channelSponsoreAuth.length;
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {channelSponsoreAuth.length > 4 && (
            <Typography
              style={{
                margin: 20,
                color: "gray",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Sponsored channels
            </Typography>
          )}
          <Grid container>
            {channelSponsoredAuthLimit <= 6 &&
              channelSponsoredAuthLimit >= 4 &&
              channelSponsoreAuth.slice(0, 6).map((channel) => (
                <Fragment key={channel._id}>
                  <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
                    <Card channelOne={channel} />
                  </Grid>
                </Fragment>
              ))}
            {/* {channelSponsoredAuthLimit <= 6 &&
              channelSponsoredAuthLimit >= 0 &&
              channelSponsoreGuest
                .slice(0, channelSponsoredAuthLimit)
                .map((channel) => (
                  <Fragment key={channel._id}>
                    <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
                      <Card channelOne={channel} />
                    </Grid>
                  </Fragment>
                ))} */}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SponsoreChannel;
