import React, { Fragment } from "react";
import Head from "next/head";
import AuthUser from "../../containers/auth/AuthUser";
import ProfileBoard from "../../containers/profile";
import Profile from "../../containers/profile/myprofile";
import { NextSeo } from "next-seo";
import { useDispatch, useSelector } from "react-redux";
import { publicProfile } from "../../store/actions/user/auth";

const ProfilePage = () => {
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
    </Head>
  );
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    user.user && dispatch(publicProfile(user.user._id));
  }, [user.user, dispatch]);

  return (
    <Fragment>
      <AuthUser>
        <NextSeo noindex={true} />
        {head()}

        <ProfileBoard />
        <Profile />
      </AuthUser>
    </Fragment>
  );
};

export default ProfilePage;
