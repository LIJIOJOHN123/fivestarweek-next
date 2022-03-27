import React, { Fragment } from "react";
import { Grid, Button, Typography } from "@mui/material";
import Card from "./Card";
import { makeStyles } from "@mui/styles";
import { withRouter } from "next/router";
import { useDispatch } from "react-redux";
import { postSearchResult } from "../../../store/actions/user/search";

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
    dispatch(postSearchResult(search, 0, 0, 0, articles.length + 18));
  };
  const loadMoreButton = () => {
    return (
      articlesCount > 0 &&
      articlesCount > 18 &&
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
          {articles.map((comment) => (
            <Fragment key={articles._id}>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={6} key={comment._id}>
                <Card commentOne={comment} />
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
