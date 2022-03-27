import React from "react";
import Head from "next/head";
import BannerConnent from "../../containers/publisher/BannerImage";

const SurveyHomePage = () => {
  const head = () => (
    <Head>
      <title> {process.env.APP_NAME} - Social media for work from home </title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,archive,follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <meta
        name="description"
        content="Do you want to reach millions of audience with your content? Five Star Week is the best platform to achieve your goals. Visit the website to know more details. "
      />
      <meta
        name="keywords"
        content="digital advertisement, online advertising business, publish digital, digital publication, digital media publishing, digital advertising business "
      />
      <meta
        property="og:tags"
        content="digital advertisement, online advertising business, publish digital, digital publication, digital media publishing, digital advertising business"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Publish your digital advertisement and get more customers"
      />
      <meta
        property="title"
        content="Publish your digital advertisement and get more customers"
      />
      <meta
        name="twitter:title"
        content="Publish your digital advertisement and get more customers"
      />
      <meta
        property="og:description"
        content="Do you want to reach millions of audience with your content? Five Star Week is the best platform to achieve your goals. Visit the website to know more details. "
      />
      <meta
        name="twitter:description"
        content="Do you want to reach millions of audience with your content? Five Star Week is the best platform to achieve your goals. Visit the website to know more details. "
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
    <div>
      <React.Fragment>
        <h1 style={{ fontSize: 0 }}>
          Publish your digital advertisement and get more customers{" "}
        </h1>
        <p style={{ fontSize: 0 }}>
          Do you want to reach millions of audience with your content? Five Star
          Week is the best platform to achieve your goals. Visit the website to
          know more details.
        </p>
        {head()}
        <BannerConnent />
      </React.Fragment>
    </div>
  );
};
export default SurveyHomePage;
