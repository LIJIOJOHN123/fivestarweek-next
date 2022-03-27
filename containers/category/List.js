import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/article/Cards";
import { makeStyles } from "@mui/styles";
import Loading from "../../components/Theme/LineLoading";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { categoryById } from "../../store/actions/user/category";

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
const List = ({ articles, id }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const handleFetch = () => {
    dispatch(categoryById(id, category.categoryIdLimit + 12, false));
  }; //
  console.log(category.articles.length, category.articlesCount);
  return (
    <div className={classes.grow}>
      <InfiniteScroll
        dataLength={category.articles.length}
        loader={<Loading />}
        next={handleFetch}
        hasMore={
          category.articles.length < category.articlesCount ? true : false
        }
      >
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
      </InfiniteScroll>
      <br />
    </div>
  );
};

export default List;
