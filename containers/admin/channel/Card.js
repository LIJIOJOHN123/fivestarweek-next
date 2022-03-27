import React from "react";
import { Avatar, Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import {
  channelBlock,
  channelUnblock,
  channelVerfication,
  channelRemoveVerification,
  channelList,
} from "../../../store/actions/admin/user";
import { useDispatch } from "react-redux";
import moment from "moment";
import AddChannelDetails from "./AddDetails";

const useStyles = makeStyles({
  paper: {
    height: 450,
    padding: 20,
    margin: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  position: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
const Card = ({ channels }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(channelList(channels.length + 20));
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={channels.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={channels.length < 4 ? false : true}
      >
        <Grid container>
          {channels.map((channel) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={channel._id}>
                <Paper className={classes.paper}>
                  <div className={classes.position}>
                    <Avatar
                      src={channel.avatar.image}
                      className={classes.avatar}
                    />
                  </div>
                  <Typography align="center">{channel.channel}</Typography>
                  <Typography align="center">{channel.channelName}</Typography>
                  <Typography align="center">{channel._id}</Typography>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Typography>status:{channel.status}</Typography>
                    <Typography>sponsor:{channel.sponsor}</Typography>
                    <Typography>verfied:{channel.verifiedStatus}</Typography>
                  </div>
                  {/* {channel.keywords.map((item, i) => (
                    <Typography align="center" key={i}>
                      {item}
                    </Typography>
                  ))} */}
                  <Typography align="center">
                    created :{moment(channel.createdAt).fromNow()}
                  </Typography>
                  <div style={{ justifyContent: "space-around" }}>
                    <Button
                      onClick={() => {
                        dispatch(channelBlock(channel._id));
                      }}
                    >
                      Block
                    </Button>
                    <Button
                      onClick={async () => {
                        dispatch(channelUnblock(channel._id));
                      }}
                    >
                      Unblock
                    </Button>
                    <Button
                      onClick={async () => {
                        dispatch(channelVerfication(channel._id));
                      }}
                    >
                      Verfication
                    </Button>
                    <Button
                      onClick={async () => {
                        dispatch(channelRemoveVerification(channel._id));
                      }}
                    >
                      Remove Verfication
                    </Button>
                    <AddChannelDetails id={channel._id} />
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Fragment>
  );
};

export default Card;
