import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
    margin: 25,
  },
  flexment: {
    display: "flex",
  },

  buttons: {
    marginLeft: "auto",
    marginRight: 20,
  },
  button: {
    marginLeft: 15,
    fontSize: 24,
  },
  link: {
    textDecoration: "none",
  },
}));
const List = ({ articles }) => {
  const classes = useStyle();
  return (
    <div className={classes.grow}>
      <Fragment>
        <Grid container>
          {articles.map((article) => (
            <Fragment key={article._id}>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
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

export default List;
