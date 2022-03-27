import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Loading from "../../../../components/Theme/LineLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  articleSponsoreApprove,
  articleSponsoreReject,
  channelSponsoreApprove,
  channelSponsoreReject,
} from "../../../../store/actions/admin/user";

const useStyles = makeStyles({
  paper: {
    height: 200,
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
const Card = () => {
  const classes = useStyles();
  const sponsore = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Typography align="center" variant="h5">
        Channels
      </Typography>
      <Grid container>
        {sponsore.channelSponsorePending.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <Paper className={classes.paper}>
                <Typography align="center" variant="h6">
                  {item.title}
                </Typography>
                <Typography align="center">{item.description}</Typography>
                <br />
                <Typography align="center">
                  status:
                  {(item.status === 2 && "Pending for approval") ||
                    (item.status === 3 && "Active") ||
                    (item.status === 4 && "Rejected") ||
                    (item.status === 5 && "Paused")}
                </Typography>
                <div style={{ display: "flex" }}>
                  <Button
                    onClick={() => dispatch(channelSponsoreApprove(item._id))}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => dispatch(channelSponsoreReject(item._id))}
                  >
                    Reject
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Typography align="center" variant="h5">
        Articles
      </Typography>
      <Grid container>
        {sponsore.articleSponsorePending.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <Paper className={classes.paper}>
                <Typography align="center" variant="h6">
                  {item.title}
                </Typography>
                <Typography align="center">{item.description}</Typography>
                <br />
                <Typography align="center">
                  status:
                  {(item.status === 2 && "Pending for approval") ||
                    (item.status === 3 && "Active") ||
                    (item.status === 4 && "Rejected") ||
                    (item.status === 5 && "Paused")}
                </Typography>
                <div style={{ display: "flex" }}>
                  <Button
                    onClick={() => dispatch(articleSponsoreApprove(item._id))}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => dispatch(articleSponsoreReject(item._id))}
                  >
                    Reject
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
