import React, { Fragment } from "react";
import Head from "next/head";
import ChannelList from "../../../containers/profile/MyChannels";
import AuthUser from "../../../containers/auth/AuthUser";
import { useDispatch, useSelector } from "react-redux";
import { publicProfile } from "../../../store/actions/user/auth";
import Loading from "../../../components/Theme/Loading";
import { channelCreatedUserList } from "../../../store/actions/user/channel";
import { NextSeo } from "next-seo";
import { Typography } from "@mui/material";

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
            <Typography variant="h5" color="primary" align="center">
              My channels
            </Typography>
            <Typography align="center">
              Choose your channel which you want to sponsor. If you want to
              sponsor article click on channel and choose the content
            </Typography>
            <br />
            <ChannelList />
          </Fragment>
        )}
      </AuthUser>
    </Fragment>
  );
};

export default MyChannelPage;
