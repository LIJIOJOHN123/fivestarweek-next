import React from "react";
import Head from "next/head";
import { getCookie } from "../../utils/auth";
import Router from "next/router";
import { Grid, Typography, Paper } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import Register from "../../containers/02 auth/Signup";

const WelcomePage = () => {
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
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        name="description"
        content="Fivestareweek is social media  where user can view articles,and have good and healthy discussions"
      />
      <meta
        name="keywords"
        content="social media, articles, videos,discussion,comments "
      />
      <meta
        property="og:tags"
        content="social media, artilces, videos, discussion,comments"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Social media for articles,videos and discussion"
      />
      <meta
        name="twitter:title"
        content="Social media for articles,videos and discussion"
      />
      <meta
        property="og:description"
        content="Fivestareweek is social media  where user can view articles,and have good and healthy discussions"
      />
      <meta
        name="twitter:description"
        content="Fivestareweek is social media  where user can view articles,and have good and healthy discussions"
      />
      <meta property="og:type" content="article" />
    </Head>
  );
  return (
    <div>
      <React.Fragment>
        {head()}
        <Typography>dafaskljkljk</Typography>
      </React.Fragment>
    </div>
  );
};
export default WelcomePage;
