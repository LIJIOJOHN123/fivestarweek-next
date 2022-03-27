import React from "react";
import Head from "next/head";
import ResetPassowrd from "../../containers/auth/ResetPassword";
import { useRouter } from "next/router";

const ResetPasswords = () => {
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
        content="Forgot your password? Visit the website and enter your registered email id to reset it."
      />
      <meta
        name="keywords"
        content="reset password, password recovery, new password, i forgot my password, forgot my password, account password recovery, reset your password, reset my password, account password reset"
      />
      <meta
        property="og:tags"
        content="reset password, password recovery, new password, i forgot my password, forgot my password, account password recovery, reset your password, reset my password, account password reset"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Reset your password - Five Star Week"
      />
      <meta
        name="twitter:title"
        content="Reset your password - Five Star Week"
      />
      <meta name="title" content="Reset your password - Five Star Week" />
      <meta
        property="og:description"
        content="Forgot your password? Visit the website and enter your registered email id to reset it."
      />
      <meta
        name="twitter:description"
        content="Forgot your password? Visit the website and enter your registered email id to reset it."
      />
      <meta property="og:type" content="article" />
    </Head>
  );
  const router = useRouter();

  return (
    <div>
      <React.Fragment>
        {head()}
        <ResetPassowrd token={router.query.token} />
      </React.Fragment>
    </div>
  );
};
export default ResetPasswords;
