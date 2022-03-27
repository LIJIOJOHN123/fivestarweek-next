import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { isAuth } from "../../../../actions/02 user/01 auth";
import { withRouter } from "next/router";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  root1: {
    position: "relative",
  },
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  img: {
    height: 140,
    borderRadius: 5,
    width: "100%",
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  link1: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    marginTop: "-13%",
    marginLeft: "-3%",
  },

  button: {
    marginRight: 10,
  },
  like: {
    marginRight: "2%",
  },
  text: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
  },
  overlay: {
    position: "absolute",
    color: "white",
    backgroundColor: "blue",
    padding: 2,
  },
  time: {
    fontSize: "14px",
  },
}));

const Card = ({ article, router }) => {
  const classes = useStyles();
  const {
    image,
    title,
    source,
    likes,
    comments,
    _id,
    channel,
    type,
    createdAt,
  } = article;
  const limitTitle =
    title.length > 70 ? title.substring(0, 70) + "...." : title;
  const design = (
    <Fragment>
      <Link href={`/articles/${channel}`}>
        <a className={classes.link}>
          <Fragment>
            <div>
              {isAuth() && router.pathname === "/" && (
                <div className={classes.overlay}>{type}</div>
              )}
              <img className={classes.img} alt={image} src={image} />
            </div>
            <Typography variant="body2">
              <strong>{limitTitle}</strong>
            </Typography>
          </Fragment>
        </a>
      </Link>
      <div className={classes.time}></div>
      <Typography variant="body2">Published By: {source}</Typography>
      <Link href={`/channels/${_id}`}>
        <a className={classes.link}>
          <Typography variant="body2">Channel: Lijo John</Typography>
        </a>
      </Link>
      <div className={classes.text}>
        {comments.length +
          " " +
          " comments " +
          moment(createdAt).fromNow("seconds")}
      </div>
    </Fragment>
  );
  const commonCard =
    router.pathname === `/article/[posts]` ||
    router.pathname === `/channels/[channel]` ||
    router.pathname === `/videos/[videos]` ? (
      <div className={classes.root}>{design} </div>
    ) : (
      <div className={classes.root1}>{design}</div>
    );

  return <div className={classes.card}>{commonCard}</div>;
};

export default withRouter(Card);
