import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { withRouter } from "next/router";
import moment from "moment";
import { useDispatch } from "react-redux";
import { articleById } from "../../../../store/actions/user/article";
import { articleSponsore } from "../../../../store/actions/admin/user";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  img: {
    height: 140,
    borderRadius: 10,
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
    marginLeft: 3,
    marginTop: 3,
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
    channel: { channelName },
  } = article;
  const limitTitle =
    title.length > 70 ? title.substring(0, 70) + "...." : title;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    const refresh = true;
    dispatch(articleById(id, 4, refresh));
  };
  const design = (
    <Fragment>
      <Link href={`/articles/${_id}`}>
        <a className={classes.link} onClick={() => handleClick(_id)}>
          <Fragment>
            <div>
              {<div className={classes.overlay}>{type}</div>}
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
      <Link href={`/channels/${channel._id}`}>
        <a className={classes.link}>
          <Typography variant="body2">Channel: {channelName}</Typography>
        </a>
      </Link>
      <div className={classes.text}>
        {comments.length +
          " " +
          " comments " +
          moment(createdAt).fromNow("seconds")}
      </div>
      <Button onClick={() => dispatch(articleSponsore(_id))}>Approve</Button>
    </Fragment>
  );

  return <div className={classes.card}>{design}</div>;
};

export default withRouter(Card);
