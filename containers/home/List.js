import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/article/Card";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Theme/LineLoading";
import { articleFollowChannel } from "../../store/actions/user/article";
import { useDispatch } from "react-redux";
import NoAarticle from "./NoArticle";
const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
    marginBottom: 10,
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
    fontSize: 15,
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
const List = ({ articles }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(articleFollowChannel(articles.page + 1));
  };
  return (
    <div className={classes.grow}>
      <Fragment>
        <br />
        <InfiniteScroll
          dataLength={articles.articleFollowedChannels.length}
          loader={<Loading />}
          next={handleFetch}
          hasMore={
            articles.articleFollowedChannels.length < articles.articlesCount
              ? true
              : false
          }
        >
          {articles.articleFollowedChannels.length > 0 ? (
            <Grid container>
              {articles.articleFollowedChannels.map((article) => (
                <Fragment key={article._id}>
                  <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                    <Card article={article} />
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          ) : (
            <NoAarticle />
          )}
          <br />
        </InfiniteScroll>
      </Fragment>
      <br />
    </div>
  );
};

export default List;
