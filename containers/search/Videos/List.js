import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import Card from "../../../components/article/Card";
import { makeStyles } from "@mui/styles";
import { withRouter } from "next/router";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
    marginLeft: -20,
    marginRight: -20,
  },
  flexment: {
    display: "flex",
  },
  buttons: {
    marginLeft: "auto",
    marginRight: 20,
  },
  button: {
    marginLeft: "-20px",
    fontSize: 24,
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
const List = ({ articles }) => {
  const classes = useStyle();
  let data = articles ? articles : [];

  return (
    <div className={classes.grow}>
      <div className={classes.flexment}></div>
      <Fragment>
        <Grid container>
          {data.map((article) => (
            <Fragment key={article._id}>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card article={article} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Fragment>
      <br />
    </div>
  );
};

export default withRouter(List);
