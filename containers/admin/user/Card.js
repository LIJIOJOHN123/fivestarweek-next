import React from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import {
  userBlock,
  userList,
  userUnblock,
} from "../../../store/actions/admin/user";
import { useDispatch } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  paper: {
    height: 300,
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
const Card = ({ users }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(userList(users.length + 20));
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={users.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={users.length < 4 ? false : true}
      >
        <Grid container>
          {users.map((user) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={user._id}>
                <Paper className={classes.paper}>
                  <div className={classes.position}>
                    <Avatar
                      src={user.avatar.image}
                      className={classes.avatar}
                    />
                  </div>
                  <Typography align="center">{user.name}</Typography>
                  <Typography align="center">{user.email}</Typography>
                  <Typography align="center">{user._id}</Typography>
                  <Typography align="center">{user.userName}</Typography>
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
                          dispatch(userBlock(user._id));
                        }}
                      >
                        Block
                      </Button>
                    </div>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={async () => {
                        dispatch(userUnblock(user._id));
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
      </InfiniteScroll>
    </Fragment>
  );
};

export default Card;
