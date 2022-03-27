import React from "react";
import { Avatar, Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import {
  commentList,
  commentUnblock,
  commentBlock,
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
const Card = ({ comments }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(commentList(comments.length + 20));
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={comments.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={comments.length < 4 ? false : true}
      >
        <Grid container>
          {comments.map((comment) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={comment._id}>
                <Paper className={classes.paper}>
                  <Typography align="center">{comment.title}</Typography>
                  <Typography align="center">
                    {comment.comment.length > 70
                      ? comment.comment.slice(0, 70)
                      : comment.comment}
                  </Typography>
                  <Typography align="center">{comment._id}</Typography>
                  <Typography align="center">
                    status:{comment.status}
                  </Typography>
                  <Typography align="center">
                    created :{moment(comment.createdAt).fromNow()}
                  </Typography>
                  <div style={{ justifyContent: "space-around" }}>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={() => {
                        dispatch(commentBlock(comment._id));
                      }}
                    >
                      Block
                    </Button>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={async () => {
                        dispatch(commentUnblock(comment._id));
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
