import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import {
  replyBlock,
  replyList,
  replyUnblock,
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
const Card = ({ replies }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(replyList(replies.length + 20));
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={replies.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={replies.length < 4 ? false : true}
      >
        <Grid container>
          {replies.map((reply) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={reply._id}>
                <Paper className={classes.paper}>
                  <Typography align="center">
                    {reply.reply.length > 70
                      ? reply.reply.slice(0, 70)
                      : reply.reply}
                  </Typography>
                  <Typography align="center">{reply._id}</Typography>
                  <Typography align="center">status:{reply.status}</Typography>
                  <Typography align="center">
                    created :{moment(reply.createdAt).fromNow()}
                  </Typography>
                  <div style={{ justifyContent: "space-around" }}>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={() => {
                        dispatch(replyBlock(reply._id));
                      }}
                    >
                      Block
                    </Button>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={async () => {
                        dispatch(replyUnblock(reply._id));
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
