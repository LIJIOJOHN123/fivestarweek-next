import React, { Fragment } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Card from "./Card";
import { makeStyles } from "@mui/styles";
import DeleteArticle from "./Delete";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import { channelArticle } from "../../../store/actions/user/channel";
import { useDispatch, useSelector } from "react-redux";
import CreateArticle from "./Create";
import Router from "next/router";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
  },

  buttons: {
    marginLeft: "auto",
    marginRight: 20,
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "gray",
  },
  middle: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
const List = ({ channelId }) => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const restriction = true;

  const user = useSelector((state) => state.auth);
  const arts = useSelector((state) => state.channel.channel.articles);
  const articles = arts ? arts : [];
  let loginUser;
  if (user.user) {
    loginUser = user.user._id;
  }
  const channelSingle = useSelector((state) => state.channel);
  let authorized = [];
  if (channelSingle.channel) {
    let matches = channelSingle.channel.channel
      ? channelSingle.channel.channel.user
      : "";
    authorized = loginUser === matches;
  }
  const handleFetch = () => {
    dispatch(channelArticle(channelId, channelSingle.limit + 20, restriction));
  };
  const locale = useSelector((state) => state.locale);
  return (
    <div className={classes.grow}>
      {channelSingle.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            {authorized && <CreateArticle id={channelId} />}
          </div>
          <Fragment>
            <Fragment>
              <InfiniteScroll
                dataLength={articles.length}
                loader={<Loading />}
                next={handleFetch}
                hasMore={
                  channelSingle.limit < channelSingle.total ? true : false
                }
              >
                <Grid container>
                  {articles.length === 0 && (
                    <Typography align="center">No item found</Typography>
                  )}
                  {articles.map((article) => (
                    <Fragment key={article._id}>
                      <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                        <Card article={article} />
                        <div style={{ display: "flex" }}></div>
                        <div className={classes.middle}>
                          {/* {authorized && <Button>dsalkfjkl</Button>} */}
                          {authorized && article.sponsor === 1 && (
                            <Button
                              onClick={() =>
                                Router.push(`/publisherart/${article._id}`)
                              }
                              variant="contained"
                              color="primary"
                              size="small"
                            >
                              Sponsor
                            </Button>
                          )}
                          {authorized && article.sponsor === 2 && (
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Requested
                            </Button>
                          )}
                          {authorized && article.sponsor === 4 && (
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Rejected
                            </Button>
                          )}
                          {authorized && article.sponsor === 3 && (
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Sponsored
                            </Button>
                          )}
                          {authorized && article.sponsor === 5 && (
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Paused
                            </Button>
                          )}
                          {authorized && (
                            <Button
                              size="small"
                              variant="contained"
                              disabled={article.sponsor !== 3}
                              color="primary"
                              onClick={() =>
                                Router.push(`/articles/${article._id}`)
                              }
                            >
                              Analysis
                            </Button>
                          )}
                          {authorized && <DeleteArticle article={article} />}
                        </div>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </InfiniteScroll>
            </Fragment>
            <br />
          </Fragment>
        </Fragment>
      )}
    </div>
  );
};

export default List;
