import { Typography, Grid, Paper, makeStyles } from "@mui/material";
import React, { Fragment } from "react";
import {
  userList,
  channelList,
  articleList,
  commentList,
  replyList,
} from "./../../../store/actions/admin/user";
import { useDispatch, useSelector } from "react-redux";
const useStyle = makeStyles(() => ({
  item: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
  },
  container: {
    marginLeft: 20,
    marginTop: 20,
  },
}));
const AdminDashboard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userList(1));
  }, []);
  React.useEffect(() => {
    dispatch(channelList(1));
  }, []);
  React.useEffect(() => {
    dispatch(articleList(1));
  }, []);
  React.useEffect(() => {
    dispatch(commentList(1));
  }, []);
  React.useEffect(() => {
    dispatch(replyList(1));
  }, []);
  const user = useSelector((state) => state.user);
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Total users
              </Typography>
              <Typography align="center">{user.userCount}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Total channels
              </Typography>
              <Typography align="center">{user.channelCount}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Total articles
              </Typography>
              <Typography align="center">{user.articleCount}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Total comments
              </Typography>
              <Typography align="center">{user.commentCount}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Total replies
              </Typography>
              <Typography align="center">{user.replyCount}</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AdminDashboard;
