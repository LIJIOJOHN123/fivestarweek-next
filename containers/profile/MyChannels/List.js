import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { channelCreatedUserList } from "../../../store/actions/user/channel";

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
    dispatch(channelCreatedUserList(channels.channelsCreated.length + 18, ids));
  };
  const loadMoreButton = () => {
    return (
      channels.totalCreatedUser > 0 &&
      channels.totalCreatedUser > 18 &&
      channels.channelsCreated.length < channels.totalCreatedUser && (
        <div className={classes.middle}>
          <Button onClick={handleFetch} size="small" variant="contained">
            Load more
          </Button>
        </div>
      )
    );
  };

  return (
    <Fragment>
      <Grid container>
        {channels.channelsCreated.length === 0 && (
          <Typography style={{ marginLeft: 20, marginTop: 20 }}>
            No channels
          </Typography>
        )}
        {channels.channelsCreated.map((channel) => (
          <Fragment key={channel._id}>
            <Grid item xs={6} sm={3} md={2} lg={2} xl={2}>
              <Card channelOne={channel} />
            </Grid>
          </Fragment>
        ))}
      </Grid>
      {loadMoreButton()}
    </Fragment>
  );
};

export default ChannelUserList;
