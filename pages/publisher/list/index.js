import React, { Fragment } from "react";
import Head from "next/head";
import AuthUser from "../../../containers/auth/AuthUser";
import { useDispatch, useSelector } from "react-redux";
import { NextSeo } from "next-seo";
import { Button, Typography } from "@mui/material";
import Router from "next/router";
import AdList from "../../../containers/sponsore/Card";
import { userSponsoredList } from "../../../store/actions/user/sponsor";
import Loading from "../../../components/Theme/Loading";

const ScorePage = () => {
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userSponsoredList());
  }, [dispatch]);
  const sponsor = useSelector((state) => state.sponsor);

  return (
    <Fragment>
      <AuthUser>
        <NextSeo noindex={true} />
        {head()}

        {sponsor.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <Typography align="center" variant="h5" color="primary">
              Advertimsent List
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={() => Router.push("/publisher/mychannels")}
            >
              Create new ad{" "}
            </Button>
            <AdList />
          </Fragment>
        )}
      </AuthUser>
    </Fragment>
  );
};

export default ScorePage;
