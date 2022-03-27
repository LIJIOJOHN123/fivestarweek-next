import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Head from "next/head";
import { FacebookIcon, TwitterIcon } from "react-share";
import Link from "next/link";

const AboutUs = () => {
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
        content="Visit the website to know who we are, how we work and more details of our business."
      />
      <meta
        name="keywords"
        content="about us, about us page, information about a company, about company, about business, information about business, about the company, company about us"
      />
      <meta
        property="og:tags"
        content="about us, about us page, information about a company, about company, about business, information about business, about the company, company about us"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Know who we are and what we do - Five Star Week"
      />
      <meta
        property="og:title"
        content="Know who we are and what we do - Five Star Week"
      />
      <meta
        name="twitter:title"
        content="Know who we are and what we do - Five Star Week"
      />
      <meta
        property="og:description"
        content="Visit the website to know who we are, how we work and more details of our business. "
      />
      <meta
        name="twitter:description"
        content="Fivestareweek is social media platform where user can read articles, view views and have good and healthy discussions"
      />
      <meta
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
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
            src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/aboutus.jpg"
            height="400"
          />
        </Grid>
        <Grid lg={6} xl={6} sm={12} md={12} xs={12} style={{ marginTop: 30 }}>
          <Typography variant="h4">Who We Are?</Typography>
          <Typography>
            We aim to employ all the people, especially the young youth. We are
            trying to create more jobs by reducing the monopoly system so that
            all the people can get enough money to fulfill their needs. We also
            allow people to do their work from the comfort of their homes so
            that they can earn passive income easily.
          </Typography>
          <Typography style={{ marginTop: 30, marginBottom: 30 }} variant="h4">
            Our vision
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="20vh"
          >
            We are trying to educate people about the job opportunities with us
            through the use of social media as people spend most of the time on
            it to pass their free time. We target to provide more jobs to the
            people and make our country free from unemployment.
          </Box>
        </Grid>

        <Grid lg={12} xl={12} sm={12} md={12} xs={12}>
          <Typography align="center" variant="h4">
            Our team
          </Typography>
        </Grid>
        <Grid lg={6} xl={6} sm={12} md={12} xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="20vh"
            style={{ marginBottom: 40, marginTop: 40, borderRadius: 20 }}
          >
            <img
              src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/lijopro.jpg"
              height="200"
              width="200"
            />
          </Box>
        </Grid>
        <Grid lg={4} xl={4} sm={12} md={12} xs={12}>
          <Typography style={{ marginTop: 30, marginBottom: 30 }}>
            Lijo is founder and CEO fivestarweek.com. He is a software engineer.
            You can follow him on social media or email him directly
            lijo@fivestarweek.com
          </Typography>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 20 }}>
              <Link
                passHref={true}
                target="_blank"
                href="https://www.facebook.com/lijojohnrbs"
              >
                <a style={{ textDecoration: "none", color: "black" }}>
                  <FacebookIcon />
                </a>
              </Link>
            </div>
            <Link
              passHref={true}
              target="_blank"
              href="https://twitter.com/lijojohnrbs"
            >
              <div style={{ marginRight: 20 }}>
                <TwitterIcon />
              </div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
AboutUs.getInitialProps = async ({ query }) => {
  return { query };
};

export default AboutUs;
