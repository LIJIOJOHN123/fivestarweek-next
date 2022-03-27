import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/article/Cards";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { categoryList } from "../../store/actions/user/category";
import { getCookie } from "../../utils/auth";

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

  sectionMobile: {
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const List = ({ articles }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const language = getCookie("language");
  const handleFetch = () => {
    dispatch(categoryList(category.categoryLimit + 2, language));
  }; //

  return (
    <div className={classes.grow}>
      <InfiniteScroll
        dataLength={category.categories.length}
        loader={<p></p>}
        next={handleFetch}
        hasMore={
          category.categories.length < category.categoryCount ? true : false
        }
      >
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
        </Fragment>
      </InfiniteScroll>
      <br />
    </div>
  );
};

export default List;
