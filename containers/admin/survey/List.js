import React, { Fragment } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  surveyApproveAdmin,
  surveyListAdmin,
  surveyRejectAdmin,
} from "../../../store/actions/admin/user";
import Link from "next/link";
import { surveyAppoveAllAdmin } from "./../../../store/actions/admin/user";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
  },

  link: {
    textDecoration: "none",
  },
  text: {
    textAlign: "left",
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "sf pro displa",
    lineHeight: "1.2",
  },
  paper: {
    height: 300,
    padding: 20,
    margin: 10,
  },
}));
const List = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(surveyListAdmin());
  }, []);
  const classes = useStyle();
  const admin = useSelector((state) => state.user);
  return (
    <Fragment>
      <div className={classes.margin}>
        <Grid container>
          {admin.surveys.map((item) => {
            return (
              <Fragment key={item._id}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Paper className={classes.paper}>
                    <Link href={`/pubchannel/${item._id}`}>
                      <a style={{ textDecoration: "none" }}>
                        <Typography align="center" variant="h6">
                          {item.title}
                        </Typography>
                        <Typography align="center">
                          {item.description}
                        </Typography>
                        <br />
                        <Typography align="center">
                          status:
                          {(item.status === 4 && "Pending for approval") ||
                            (item.status === 1 && "Active") ||
                            (item.status === 2 && "Rejected") ||
                            (item.status === 3 && "Paused") ||
                            (item.status === 5 && "Expired")}
                        </Typography>
                      </a>
                    </Link>
                    <Button
                      onClick={() => dispatch(surveyApproveAdmin(item._id))}
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => dispatch(surveyRejectAdmin(item._id))}
                    >
                      Reject
                    </Button>
                    <Button
                      onClick={() => dispatch(surveyAppoveAllAdmin(item._id))}
                    >
                      Approve all
                    </Button>
                  </Paper>
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      </div>
    </Fragment>
  );
};

export default List;
