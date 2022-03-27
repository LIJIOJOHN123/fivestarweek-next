import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

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
}));
const List = () => {
  const classes = useStyle();
  const articles = useSelector((state) => state.user);
  return (
    <Fragment>
      <div className={classes.margin}>
        <Grid container>
          {articles.sponsoreArticlesPending.map((item) => {
            return (
              <Fragment>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card article={item} />
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
