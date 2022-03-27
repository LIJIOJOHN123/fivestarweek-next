import React, { Fragment } from "react";
import Head from "next/head";
import ChannelList from "../../containers/profile/Followed/index";
import AuthUser from "../../containers/auth/AuthUser";
import ProfileBoard from "../../containers/profile";
import { useDispatch, useSelector } from "react-redux";
import { channelFollowed } from "../../store/actions/user/channel";
import { publicProfile } from "../../store/actions/user/auth";
import Loading from "../../components/Theme/Loading";
import { NextSeo } from "next-seo";

const ProfilePage = () => {
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(channelFollowed(18));
  }, [dispatch]);
  const user = useSelector((state) => state.auth);
  React.useEffect(() => {
    user.user && dispatch(publicProfile(user.user._id));
  }, [user.user, dispatch]);
  const channel = useSelector((state) => state.channel);
  return (
    <Fragment>
      <NextSeo noindex={true} />
      <AuthUser>
        <NextSeo noindex={true} />
        {head()}

        {channel.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <ProfileBoard />
            <ChannelList />
          </Fragment>
        )}
      </AuthUser>
    </Fragment>
  );
};

export default ProfilePage;
