import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../components/Theme/LineLoading";
import {
  articleBlock,
  articleList,
  articleUnblock,
} from "../../../store/actions/admin/user";
import { useDispatch } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  paper: {
    height: 360,
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
const Card = ({ articles }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFetch = () => {
    dispatch(articleList(articles.length + 20));
  };
  return (
    <Fragment>
      <InfiniteScroll
        dataLength={articles.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={articles.length < 4 ? false : true}
      >
        <Grid container>
          {articles.map((article) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={article._id}>
                <Paper className={classes.paper}>
                  <img src={article.image} height="150px" width="100%" />
                  <Typography align="center">
                    {article.title.length > 30
                      ? article.title.slice(0, 30)
                      : article.title}
                  </Typography>
                  <Typography align="center">{article.id}</Typography>
                  <Typography align="center">
                    status:{article.status}
                  </Typography>
                  <Typography align="center">
                    sponsor:{article.sponsor}
                  </Typography>
                  <Typography align="center">
                    created :{moment(article.createdAt).fromNow()}
                  </Typography>
                  <div style={{ justifyContent: "space-around" }}>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={() => {
                        dispatch(articleBlock(article._id));
                      }}
                    >
                      Block
                    </Button>
                    <Button
                      color="primary"
                      varaint="contained"
                      onClick={async () => {
                        dispatch(articleUnblock(article._id));
                      }}
                    >
                      Unblock
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Fragment>
  );
};

export default Card;
