import React from "react";
import Head from "next/head";
import { getCookie, parseCookies } from "../utils/auth";
import ArticleList from "../containers/home/ArtList";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Theme/Loading";
import { categoryList } from "../store/actions/user/category";
import { Button, Typography } from "@mui/material";
import Router from "next/router";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
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
const App = ({ props }) => {
  const classes = useStyles();
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
      <meta
        property="og:title"
        content="Social Media for Articles, Videos and News"
      />
      <meta
        property="og:title"
        content="Social Media for Articles, Videos and News"
      />
      <meta
        name="twitter:title"
        content="Social Media for Articles, Videos and News"
      />
      <meta
        property="og:description"
        content="View interesting articles, videos or news under one website. You can also create your own channel and add the articles of your interest and gain large audience.  Visit our website for more details. "
      />
      <meta
        name="twitter:description"
        content="Fivestareweek is social media platform where user can read articles, view views and have good and healthy discussions"
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
  const language = getCookie("language");
  React.useEffect(() => {
    dispatch(categoryList(6, language));
  }, [dispatch, language]);

  const category = useSelector((state) => state.category);
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
          {category.categories.map((item) => {
            return (
              <div key={item._id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                >
                  {" "}
                  <a href={`/category/${item._id}`}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                      onClick={() => Router.push(`/category/${item._id}`)}
                    >
                      {`${item.localCategory
                        .charAt(0)
                        .toUpperCase()}${item.localCategory.slice(1)}`}
                    </Typography>
                  </a>
                  <a href={`/category/${item._id}`}>
                    <DoubleArrowIcon
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                      onClick={() => Router.push(`/category/${item._id}`)}
                    />
                  </a>
                </div>
                <ArticleList articles={item ? item.articles : []} />
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
App.getInitialProps = async ({ req, res }) => {
  const token = parseCookies(req).token;
  if (token) {
    res.writeHead(302, {
      // or 301
      Location: `${process.env.DOMAIN}/home`,
    });
    res.end();
    return {
      token,
    };
  } else {
    const tokens = "dafads";
    return { tokens };
  }
};

export default App;
