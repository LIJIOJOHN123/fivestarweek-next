import React, { Fragment } from "react";
import Head from "next/head";
import axios from "axios";
import ArticleAnalysDetails from "./../../containers/analytics/ArticleDetails";

const ArticleAnalyticsPage = ({ articles }) => {
  const head = () => (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=ISO-8859-1"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <title> FiveStarWeek</title>
      <meta property="og:url" content={arts.link} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={arts.title} />
      <meta property="og:description" content={arts.description} />
      <meta property="og:image" content={arts.image} />
      <meta name="title" content={arts.title} />
      <meta name="dscription" content={arts.description} />
      <meta name="keywords" content={arts.keywords} />
      <meta name="image" content={arts.image} />
      <meta property="og:title" content="wemake thinks better" />
      <meta property="og:tags" content={arts.keywords} />
      <meta property="og:site_name" content="Fivestarweek" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={arts.link} />
      <meta name="twitter:title" content={arts.title} />
      <meta name="twitter:description" content={arts.description} />
      <meta name="twitter:image" content={arts.image} />
    </Head>
  );

  return (
    <Fragment>
      <ArticleAnalysDetails analytics={articles} />
    </Fragment>
  );
};
ArticleAnalyticsPage.getInitialProps = async ({ query, req }) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/articlestatics/${query.analytics}`,
    {}
  );
  return {
    articles: res.data,
  };
};

export default ArticleAnalyticsPage;
