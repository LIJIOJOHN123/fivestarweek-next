import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";
const Career = () => {
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
      <meta
        name="description"
        content="Fivestareweek is social media platform where user can read articles, view views and have good and healthy discussions"
      />
      <meta
        name="keywords"
        content="social media, articles, videos,discussion,comments "
      />
      <meta
        property="og:tags"
        content="social media, artilces, videos, discussion,comments"
      />
      <meta
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Social media articles,videos and discussion"
      />
      <meta
        name="twitter:title"
        content="Social media articles,videos and discussion"
      />
      <meta
        property="og:description"
        content="Fivestareweek is social media platform where user can read articles, view views and have good and healthy discussionsn"
      />
      <meta
        name="twitter:description"
        content="Fivestareweek is social media platform where user can read articles, view views and have good and healthy discussions"
      />
      <meta property="og:type" content="article" />
    </Head>
  );
  return (
    <Fragment>
      {head()}

      <Grid container>
        <Grid lg={6} xl={6} sm={12} md={12} xs={12}>
          <img
            src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/careeer.jpg"
            height="300"
          />
        </Grid>
        <Grid lg={6} xl={6} sm={12} md={12} xs={12} style={{ marginTop: 30 }}>
          <Typography variant="h4">About our work culture</Typography>
          <Typography>
            We are happy to know about your keen interest to pursue a career
            opportunity with Fivestarweek.com.You can send your resume to
            hr@fivestarweek.com. As we evaluate your profile, we shall get in
            touch with you. Thank you once again and wish you all the best.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};
Career.getInitialProps = async ({ query }) => {
  return { query };
};

export default Career;
