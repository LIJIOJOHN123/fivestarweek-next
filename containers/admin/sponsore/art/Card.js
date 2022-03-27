import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { articleForceExit } from "../../../../store/actions/admin/user";

const useStyles = makeStyles({
  paper: {
    height: 280,
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
const Card = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Link href={`/pubarticle/${item._id}`}>
          <a style={{ textDecoration: "none", color: "black" }}>
            <Typography align="center" variant="h6">
              {item.title}
            </Typography>
            <Typography align="center">{item.description}</Typography>
            <Typography align="center">
              status:
              {(item.status === 2 && "pending for approval") ||
                (item.status === 3 && "in progress") ||
                (item.status === 4 && "rejected") ||
                (item.status === 5 && "paused") ||
                (item.status === 1 && "expired")}
            </Typography>
            <Typography align="center">
              Guest view:{item.guestViews.length}
            </Typography>
            <Typography align="center">
              Guest view:{item.authViews.length}
            </Typography>{" "}
            <Typography align="center">
              Guest view:{item.guestVisit.length}
            </Typography>
            <Typography align="center">
              Guest view:{item.authVisit.length}
            </Typography>
          </a>
        </Link>
        <br />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button onClick={() => dispatch(articleForceExit(item._id))}>
            Force exit
          </Button>
        </div>
      </Paper>
    </Fragment>
  );
};

export default Card;
