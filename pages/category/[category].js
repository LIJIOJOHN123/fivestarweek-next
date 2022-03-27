import React from "react";
import Head from "next/head";
import ArticleList from "../../containers/category/List";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Theme/Loading";
import { Button } from "@mui/material";
import { categoryById } from "../../store/actions/user/category";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    margin: 0,
    marginTop: 25,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
}));
const Category = ({ categoryId }) => {
  const head = () => (
    <Head>
      <title> {process.env.APP_NAME} </title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,archive,follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />

      <meta name="keywords" content="videos, articles, social media, news" />
      <meta property="og:tags" content="videos, articles, social media, news" />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="og:title" content="Category - view by category and id" />
      <meta property="og:title" content="Category - view by category and id" />
      <meta name="twitter:title" content="Category - view by category and id" />
      <meta
        property="og:description"
        content="View interesting articles, videos or news under one website. You can also create your own channel and add the articles of your interest and gain large audience.  Visit our website for more details. "
      />
      <meta
        name="twitter:description"
        content="View interesting articles, videos or news under one website. You can also create your own channel and add the articles of your interest and gain large audience.  Visit our website for more details."
      />
      <meta
        name="description"
        content="View interesting articles, videos or news under one website. You can also create your own channel and add the articles of your interest and gain large audience.  Visit our website for more details."
      />
      <meta
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
    </Head>
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(categoryById(categoryId, 12, true));
  }, [dispatch, categoryId]);

  const category = useSelector((state) => state.category);
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1 style={{ fontSize: 0 }}>
        Social Media for Articles, Videos and News
      </h1>
      <p style={{ fontSize: 0 }}>
        View interesting articles, videos or news under one website. You can
        also create your own channel and add the articles of your interest and
        gain large audience. Visit our website for more details.
      </p>

      {head()}

      {category.loading ? (
        <Loading />
      ) : (
        <div className={classes.sectionDesktop}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "black",
              }}
            >
              {category.category.localCategory}
            </Button>
          </div>
          <ArticleList articles={category.articles} id={categoryId} />
        </div>
      )}
    </React.Fragment>
  );
};
Category.getInitialProps = async ({ query }) => {
  return {
    categoryId: query.category,
  };
};
export default Category;
