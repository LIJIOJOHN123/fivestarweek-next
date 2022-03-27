import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  channelList,
  channelUnfollowedList,
} from "../../store/actions/user/channel";
import { getCookie } from "../../utils/auth";

const useStyle = makeStyles((theme) => ({
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 50,
  },
}));
const List = ({ channel }) => {
  const classes = useStyle();
  const channels = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(channelList(channel.limit + 18));
  };
  const token = getCookie("token");
  const data = token ? channel.channelsUnFollowedList : channel.channels;
  const handeleAuthFetch = () => {
    dispatch(channelUnfollowedList(channel.limit + 18, token));
  };
  const loadMoreButton = () => {
    return (
      channel.total > 0 &&
      channel.total > 18 &&
      channel.channels.length < channel.total && (
        <div className={classes.middle}>
          <Button onClick={handleFetch} size="small" variant="contained">
            Load more
          </Button>
        </div>
      )
    );
  };

  const loadMoreAuthButton = () => {
    return (
      channel.total > 0 &&
      channel.total > 18 &&
      channel.channelsUnFollowedList.length < channel.total && (
        <div className={classes.middle}>
          <Button onClick={handeleAuthFetch} size="small" variant="contained">
            Load more
          </Button>
        </div>
      )
    );
  };

  return (
    <div>
      <Fragment>
        <Grid container>
          {data.map((channel) => (
            <Fragment key={channel._id}>
              <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
                <Card channelOne={channel} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
        {token ? loadMoreAuthButton() : loadMoreButton()}
      </Fragment>
    </div>
  );
};

export default List;
