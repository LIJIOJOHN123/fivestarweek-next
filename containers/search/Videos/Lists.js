import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import Card from "../../../components/article/Card";
import { makeStyles } from "@mui/styles";
import { withRouter } from "next/router";
import { useDispatch } from "react-redux";
import { postSearchResult } from "../../../store/actions/user/search";

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
const List = ({ articles, articlesCount, search }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleFetch = async () => {
    dispatch(postSearchResult(search, 0, 0, articles.length + 20, 0));
  };
  const loadMoreButton = () => {
    return (
      articlesCount > 0 &&
      articlesCount > 20 &&
      articles.length < articlesCount && (
        <div className={classes.middle}>
          <Button color="primary" variant="contained" onClick={handleFetch}>
            Load more
          </Button>
        </div>
      )
    );
  };
  return (
    <div className={classes.grow}>
      <div className={classes.flexment}></div>
      <Fragment>
        <Grid container>
          {articles.map((article) => (
            <Fragment key={article._id}>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card article={article} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
        {loadMoreButton()}
      </Fragment>
      <br />
    </div>
  );
};

export default withRouter(List);
