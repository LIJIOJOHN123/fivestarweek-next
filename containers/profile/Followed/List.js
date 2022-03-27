import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { channelFollowed } from "../../../store/actions/user/channel";
import Loading from "../../../components/Theme/Loading";
const useStyle = makeStyles((theme) => ({
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 50,
  },
}));
const ChannelUserList = () => {
  const classes = useStyle();
  const channels = useSelector((state) => state.channel);
  const loading = channels.loading;
  const users = useSelector((state) => state.auth);
  let ids;
  if (users.user) {
    ids = users.user._id;
  }
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(channelFollowed(channels.channelsFollowed.length + 18));
  };
  const loadMoreButton = () => {
    return (
      channels.followedTotal > 0 &&
      channels.followedTotal > 18 &&
      channels.channelsFollowed.length < channels.followedTotal && (
        <div className={classes.middle}>
          <Button onClick={handleFetch} size="small" variant="contained">
            Load more
          </Button>
        </div>
      )
    );
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Fragment>
            <Typography variant="h6" style={{ marginLeft: 20, marginTop: 20 }}>
              Followed Channels
            </Typography>
            {channels.channelsFollowed.length === 0 && (
              <Typography style={{ marginLeft: 20, marginTop: 20 }}>
                No channels following
              </Typography>
            )}
            <Grid container>
              {channels.channelsFollowed.map((channel) => (
                <Fragment key={channel._id}>
                  <Grid item xs={6} sm={3} md={2} lg={2} xl={2}>
                    <Card channelOne={channel} />
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Fragment>
          {loadMoreButton()}
        </Fragment>
      )}
    </div>
  );
};

export default ChannelUserList;
