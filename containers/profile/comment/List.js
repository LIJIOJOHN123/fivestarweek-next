import { makeStyles } from "@mui/styles";
import { Typography, Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import moment from "moment";
import { commetByUser } from "../../../store/actions/user/comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    height: 290,
  },
  paper: {
    margin: 10,
    backgroundColor: "#f5f5f5",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },

  text: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
  },

  show: {
    display: "flex",
  },
  item: {
    marginLeft: 10,
  },
}));
const CommentList = () => {
  const classes = useStyles();
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleFetch = () => {
    if (user.user) {
      dispatch(commetByUser(user.user._id, comment.commentByUser.length + 21));
    }
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={comment.commentByUser.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={
          comment.commentByUser.length < comment.totalByUser ? true : false
        }
      >
        {comment.commentByUser.length === 0 && (
          <Typography style={{ marginLeft: 20, marginTop: 20 }}>
            No comments
          </Typography>
        )}
        <Grid container>
          {comment.commentByUser.map((item) => {
            const { title, _id } = item.article;
            const limitTitle =
              title.length > 50 ? title.substring(0, 50) + "...." : title;

            return (
              <Fragment key={item._id}>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                  <Paper className={classes.paper}>
                    <div className={classes.card}>
                      <Fragment>
                        <Link href={`/article/${_id}`}>
                          <a className={classes.link}>
                            <Fragment>
                              <Typography
                                variant="h6"
                                style={{ color: "gray" }}
                              >
                                {item.title.length > 20
                                  ? item.title.slice(0, 20) + "..."
                                  : item.title}
                              </Typography>
                              <Typography style={{ marginTop: 10 }}>
                                {item.comment.length > 150
                                  ? item.comment.slice(0, 150)
                                  : item.comment}
                              </Typography>
                              <Typography
                                style={{
                                  marginTop: 10,
                                  marginBottom: 10,
                                  color: "gray",
                                }}
                                guttersome
                                variant="body2"
                              >
                                <strong>{limitTitle}</strong>
                              </Typography>
                            </Fragment>
                          </a>
                        </Link>
                        <Fragment>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              style={{
                                marginTop: 10,
                                marginBottom: 10,
                                color: "gray",
                              }}
                              variant="body2"
                            >
                              <strong>{item.reply.length} replies</strong>
                            </Typography>
                            <Typography
                              style={{
                                marginTop: 10,
                                marginBottom: 10,
                                color: "gray",
                              }}
                              variant="body2"
                            >
                              <strong>{item.likes.length} likes</strong>
                            </Typography>
                            <Typography
                              style={{
                                marginTop: 10,
                                marginBottom: 10,
                                color: "gray",
                              }}
                              variant="body2"
                            >
                              <strong>
                                {item.violation.length} reported violation
                              </strong>
                            </Typography>
                            <Typography
                              style={{
                                marginTop: 10,
                                marginBottom: 10,
                                color: "gray",
                                fontSize: 14,
                              }}
                            >
                              <strong>
                                {moment(item.createdAt).fromNow()}
                              </strong>
                            </Typography>
                          </div>
                        </Fragment>
                      </Fragment>
                    </div>
                  </Paper>
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Fragment>
  );
};

export default CommentList;
