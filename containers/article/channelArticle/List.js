import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../channel/articles/Card";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
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
  if (articles.length <= 4) {
    return null;
  }

  return (
    <div className={classes.grow}>
      <Fragment>
        <Typography variant="h6" style={{ marginLeft: 10 }}>
          Related articles
        </Typography>
        <br />
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
