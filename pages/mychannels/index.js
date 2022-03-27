import React, { Fragment } from "react";
import Head from "next/head";
import ChannelList from "../../containers/profile/MyChannels";
import AuthUser from "../../containers/auth/AuthUser";
import ProfileBoard from "../../containers/profile";
import { useDispatch, useSelector } from "react-redux";
import { publicProfile } from "../../store/actions/user/auth";
import Loading from "../../components/Theme/Loading";
import { channelCreatedUserList } from "../../store/actions/user/channel";
import { NextSeo } from "next-seo";

const MyChannelPage = () => {
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
  React.useEffect(() => {
    user.user && dispatch(channelCreatedUserList(30, user.user._id));
  }, [user.user, dispatch]);
  const channel = useSelector((state) => state.channel);
  return (
    <Fragment>
      <AuthUser>
        {head()}
        <NextSeo noindex={true} />

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

export default MyChannelPage;
