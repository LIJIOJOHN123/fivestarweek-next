import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Grid, Avatar } from "@mui/material";
import { getCookie, isAuth } from "../../utils/auth";
import Link from "next/link";
import AvatarButtton from "./channelDialog";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleList from "./articles/List";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import {
  channelFollow,
  channelUnfollow,
} from "../../store/actions/user/channel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.1),
      paddingTop: "-65",
    },
  },
  bigAvatar: {
    width: 150,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },

  text: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 4,
  },
  text1: {
    fontSize: 15,
    color: "white",
  },

  text2: {
    fontSize: 12,
    color: "gray",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  profileCard: {
    background: "#00008B",
    color: "white",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
    position: "static",
    borderRadius: 10,
  },
}));

const ChannelCard = ({ channels, channelId }) => {
  const {
    avatar,
    _id,
    channel,
    channelName,
    follows,
    user,
    verifiedStatus,
    introduction,
  } = channels.channel;
  const classes = useStyles();
  const token = getCookie("token");
  const users = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const routes = "id";
  const handleFollow = async () => {
    await dispatch(channelFollow(_id, routes));
    await Router.replace(Router.asPath);
  };
  const handleUnfollow = async () => {
    await dispatch(channelUnfollow(_id, routes));
    await Router.replace(Router.asPath);
  };
  let checkFollowList = [];
  if (users.user) {
    checkFollowList = follows.filter(
      (follow) => follow.user === users.user._id
    );
  }
  const locale = useSelector((state) => state.locale);
  return (
    <div className={classes.card}>
      <div>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.profileCard}
          >
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={avatar.image}
                className={classes.bigAvatar}
              />
            </div>
            <div>
              <AvatarButtton id={_id} />
            </div>
            <Typography align="center" className={classes.text}>
              {channel}
              {verifiedStatus == 2 && (
                <CheckCircleIcon
                  color="primary"
                  size="small"
                  style={{ marginTop: "-15" }}
                />
              )}
            </Typography>
            <Typography align="center" className={classes.text1}>
              @{channelName}
            </Typography>
            <Typography align="center" className={classes.text2}>
              Followers:{follows.length}
            </Typography>
            <div className={classes.button}>
              {token ? (
                checkFollowList.length === 0 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleFollow();
                    }}
                  >
                    {locale.follow}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUnfollow()}
                  >
                    {locale.unfollow}
                  </Button>
                )
              ) : (
                ""
              )}

              {!isAuth() && (
                <Link href="/login">
                  <Button variant="contained" color="primary">
                    {locale.follow}
                  </Button>
                </Link>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <br />

      <Typography>{introduction}</Typography>
      <br />
      <ArticleList channels={channels} channelId={channelId} />
    </div>
  );
};

export default ChannelCard;
