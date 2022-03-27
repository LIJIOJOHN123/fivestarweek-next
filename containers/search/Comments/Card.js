import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Grid, Link } from "@mui/material";
import Divider from "@mui/material/Divider";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  roots: {
    marginTop: "3%",
    marginRight: "3%",
    marginBottom: "3%",
    padding: "3%",
    borderRadius: "2%",
    backgroundColor: "#f5f5f5",
  },
  details: {
    display: "flex",
    margin: 10,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  avatar: {
    marginRigh: "auto",
    height: 50,
    width: 50,
    flexShrink: 0,
    flexGrow: 0,
  },
  name: {
    display: "flex",
  },
  icons: {
    display: "flex",
    flexWrap: 1,
  },
  icons1: {
    flexWrap: 1,
    color: "gray",
    fontWeight: "bold",
    marginRight: theme.spacing(2),
  },
  icon2: {
    marginRight: theme.spacing(2),
  },
  main: {
    display: "flex",
  },
  displayRight: {
    textAlign: "right",
    fontSize: "12px",
  },
  name: {
    fontSize: "12px",
  },
  buttons: {
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "blue",
    marginRight: 3,
    borderRadius: 2,
  },
}));

const CommentCard = ({ commentOne }) => {
  const classes = useStyles();
  const { comment, title, avatar, name, likes, reply, createdAt, _id, user } =
    commentOne;
  return (
    <Fragment>
      <Link className={classes.link} underline="none">
        <div className={classes.roots}>
          <Grid container>
            <Grid lg={3}>
              <Avatar className={classes.avatar} src={user.avatar.image} />
              <Typography className={classes.name} color="primary">
                {name}
              </Typography>
            </Grid>
            <Grid lg={9}>
              <div classes={classes.main}>
                <Typography className={classes.displayRight}>
                  {" "}
                  {moment(createdAt).fromNow()}
                </Typography>
              </div>
              <Typography gutterBottom variant="h6">
                {title && title.length > 45
                  ? title.slice(0, 45) + "....."
                  : title}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <br />
          <Typography gutterBottom variant="body2">
            {comment.length > 150 ? comment.slice(0, 150) + "....." : comment}
          </Typography>
          <div className={classes.details}>
            <div>
              <div></div>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              ></Typography>
              <div>
                <div className={classes.icons}>
                  <Typography className={classes.icons1}>
                    {likes.length} likes
                  </Typography>
                  <Typography className={classes.icons1}>
                    {reply.length} replies
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CommentCard;
