import React, { Fragment } from "react";
import { Grid, Button, Typography, Divider } from "@mui/material";
import CommentCard from "./Card";
import CreateComment from "./Create";
import Link from "next/link";
import { getCookie } from "../../utils/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { commentList } from "../../store/actions/user/comment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  link: {
    textDecoration: "none",
  },
});

const CommentList = ({ comments }) => {
  const classes = useStyles();
  const router = useRouter();
  const { posts } = router.query;

  const token = getCookie("token");
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(commentList(posts, comments.limit + 24));
  };
  const loadMoreButton = () => {
    return (
      comments.total > 0 &&
      comments.total > 4 &&
      comments.limit < comments.total && (
        <div className={classes.middle}>
          <Button color="primary" variant="contained" onClick={handleFetch}>
            Load more
          </Button>
        </div>
      )
    );
  };
  const view = (
    <div>
      <Grid container>
        {comments.comments.length === 0 ? (
          <Typography
            align="center"
            style={{ paddingBottom: 100, paddingTop: 20 }}
          >
            No comments
          </Typography>
        ) : (
          comments.comments.map((comment) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={comment._id}>
              <CommentCard commentOne={comment} posts={posts} />
            </Grid>
          ))
        )}
      </Grid>
      {loadMoreButton()}
    </div>
  );
  return (
    <Fragment>
      <Divider variant="middle" />
      <div>
        {token ? (
          <CreateComment id={posts} />
        ) : (
          <Link href="/login" style={{ marginBottom: 20 }}>
            <a className={classes.link}>
              <Button color="primary" variant="contained">
                Post comments
              </Button>
            </a>
          </Link>
        )}
      </div>
      <div>{view}</div>
    </Fragment>
  );
};
export default CommentList;
