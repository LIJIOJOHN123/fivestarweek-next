import React, { Fragment } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import Article from "../../containers/article";
import { commentList } from "../../store/actions/user/comment";
import axios from "axios";
import { getCookie } from "../../utils/auth";
import { articleAuthVisit, articleIPVisit } from "../../action/visitor";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    margin: 2,
    marginTop: 2,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
}));
const SinglePostPage = ({ articles, posts }) => {
  const classes = useStyles();
  const arts = articles.article ? articles.article : {};
  const head = () => (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <title> {arts.title}</title>
      <meta name="title" content={arts.title} />
      <meta name="description" content={arts.description} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.fivestarweek.com/article/${arts._id}`}
      />
      <meta property="og:title" content={arts.title} />
      <meta name="description" content={arts.description} />
      <meta property="og:image" content={arts.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://www.fivestarweek.com/article/${arts._id}`}
      />
      <meta property="twitter:title" content={arts.title} />
      <meta property="twitter:description" content={arts.description} />
      <meta property="twitter:image" content={arts.image} />
    </Head>
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    posts && dispatch(commentList(posts, 12));
  }, [posts, dispatch]);
  const token = getCookie("token");
  React.useEffect(() => {
    let result = async () => {
      try {
        const ipdetails = await axios.get(
          "https://extreme-ip-lookup.com/json/"
        );
        const formData = {
          ip: ipdetails.data.query,
          city: ipdetails.data.city,
          country: ipdetails.data.country,
          region: ipdetails.data.region,
        };
        posts && token && (await articleAuthVisit(posts, token, formData));
      } catch (error) {
        console.log(error);
      }
    };
    return result;
  }, [posts, token]);
  React.useEffect(() => {
    let result = async () => {
      try {
        const ipdetails = await axios.get(
          "https://extreme-ip-lookup.com/json/"
        );
        const formData = {
          ip: ipdetails.data.query,
          city: ipdetails.data.city,
          country: ipdetails.data.country,
          region: ipdetails.data.region,
        };
        posts && (await articleIPVisit(posts, formData));
      } catch (error) {
        console.log(error);
      }
    };
    return result;
  }, [posts]);

  return (
    <Fragment>
      {head()}
      <div className={classes.sectionDesktop}>
        <Article article={articles} />
      </div>
    </Fragment>
  );
};
SinglePostPage.getInitialProps = async ({ query, req }) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/articles/${query.posts}`
  );
  return {
    articles: res.data,
    posts: query.posts,
  };
};

export default SinglePostPage;
