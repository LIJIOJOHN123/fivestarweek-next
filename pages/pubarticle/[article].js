import React, { Fragment } from "react";
import Head from "next/head";
import Loading from "../../components/Theme/Loading";
import { useRouter } from "next/router";
import axios from "axios";
import { parseCookies } from "../../utils/auth";
import ArticlePublisherId from "../../containers/articlelPublisherId";

const ArticleSponsorId = ({ sponsoredArticle }) => {
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
      <title> {process.env.APP_NAME}</title>
      <meta property="og:url" content="wemake thinks better" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="wemake thinks better" />
      <meta property="og:description" content="wemake thinks better" />
      <meta
        property="og:image"
        content="https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2021/3/8/twenty20-new-entrants.jpg"
      />
      <meta property="fb.app_id" content="606152919948429" />
      <meta name="title" content="wemake thinks better" />
      <meta name="description" content="wemake thinks better" />
      <meta name="keywords" content="wemake thinks bette" />
      <meta name="image" content="wemake thinks better" />
      <meta property="og:title" content="wemake thinks better" />
      <meta property="og:tags" content="wemake thinks bette" />
      <meta property="og:site_name" content="weMshare" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@weMshare" />
      <meta name="twitter:url" content="wemake thinks better" />
      <meta name="twitter:creator" content="weMshare" />
      <meta name="twitter:title" content="wemake thinks better" />
      <meta name="twitter:description" content="wemake thinks better" />
      <meta
        name="twitter:image"
        content="https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2021/3/8/twenty20-new-entrants.jpg"
      />
    </Head>
  );
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Fragment>
      {head()}

      <ArticlePublisherId sponsoredArticle={sponsoredArticle} />
    </Fragment>
  );
};

ArticleSponsorId.getInitialProps = async ({ query, req }) => {
  let token = await parseCookies(req).token;
  const res = await axios.get(
    `${process.env.SERVER_API}/sponsorearticlebyid/${query.article}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return {
    sponsoredArticle: res.data,
  };
};

export default ArticleSponsorId;
