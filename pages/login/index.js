import React from "react";
import Head from "next/head";
import { getCookie } from "../../utils/auth";
import Router from "next/router";
import { Grid, Paper } from "@mui/material";
import SignIn from "../../containers/auth/Signin";
import LoginLeft from "../../containers/auth/LoginLeft";

const LoginPage = () => {
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
      <meta name="title" content="Login to your Five Star Week Account " />
      <meta
        name="description"
        content="Login to your account to add or modify your content and also to edit your profile details."
      />
      <meta
        name="keywords"
        content="create a channel, create new channel, how to make a channel, how to create a channel, how to create a new channel, new channel create"
      />
      <meta
        property="og:tags"
        content="create a channel, create new channel, how to make a channel, how to create a channel, how to create a new channel, new channel create"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Login to your Five Star Week Account "
      />
      <meta
        name="twitter:title"
        content="Login to your Five Star Week Account "
      />
      <meta
        property="og:description"
        content="Login to your account to add or modify your content and also to edit your profile details."
      />
      <meta
        name="twitter:description"
        content="Login to your account to add or modify your content and also to edit your profile details."
      />
      <meta property="og:type" content="article" />
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

  const token = getCookie("token");
  React.useEffect(() => {
    if (token) {
      Router.push("/home");
    }
  }, [token]);

  return (
    <div>
      <React.Fragment>
        <h1 style={{ fontSize: 0 }}>Login to your Five Star Week Account </h1>
        <p style={{ fontSize: 0 }}>
          Login to your account to add or modify your content and also to edit
          your profile details.
        </p>
        {head()}
        <Grid container>
          <LoginLeft />
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <Paper
              style={{
                height: "720px",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <SignIn />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};
export default LoginPage;
