import React from "react";
import Head from "next/head";
import { getCookie } from "../../utils/auth";
import Router from "next/router";
import { Grid, Paper } from "@mui/material";
import Register from "../../containers/auth/Signup";

const RegisterPage = () => {
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
        content="Want to create your own channel? Quickly sign up to our website and and explore more features"
      />
      <meta
        name="keywords"
        content="create a account, create a new account, new account open, sign up page, open my account, account sign up, account registration"
      />
      <meta
        property="og:tags"
        content="create a account, create a new account, new account open, sign up page, open my account, account sign up, account registration"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Sign Up to become a member Five Star Week Account"
      />
      <meta
        property="title"
        content="Sign Up to become a member Five Star Week Account"
      />
      <meta
        name="twitter:title"
        content="Sign Up to become a member Five Star Week Account"
      />
      <meta
        property="og:description"
        content="Want to create your own channel? Quickly sign up to our website and and explore more features"
      />
      <meta
        name="twitter:description"
        content="Want to create your own channel? Quickly sign up to our website and and explore more features"
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
    token && Router.push("/home");
  }, [token]);

  return (
    <div>
      <React.Fragment>
        {head()}
        <Grid container>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <Paper
              style={{
                height: "590px",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Register />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};
export default RegisterPage;
