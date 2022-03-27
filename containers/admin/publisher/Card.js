import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";

import {
  publisherBlock,
  publisherUnblock,
} from "../../../store/actions/admin/user";
import { useDispatch } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  paper: {
    height: 150,
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
const Card = ({ publisher }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Grid container>
        {publisher.map((user) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={user._id}>
              <Paper className={classes.paper}>
                <Typography align="center">{user.publisher}</Typography>
                <Typography align="center">{user._id}</Typography>
                <Typography align="center">{user.status}</Typography>
                <Typography align="center">
                  created :{moment(user.createdAt).fromNow()}
                </Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={async () => {
                        dispatch(publisherBlock(user._id));
                      }}
                    >
                      Block
                    </Button>
                  </div>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={async () => {
                      dispatch(publisherUnblock(user._id));
                    }}
                  >
                    Unblock
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Card;
