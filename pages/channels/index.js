import React from "react";
import Head from "next/head";
import ChannelList from "../../containers/channels";
import Loading from "../../components/Theme/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  channelList,
  channelUnfollowedList,
} from "../../store/actions/user/channel";
import { getCookie } from "../../utils/auth";
// import ChannelCreate from "../../containers/04 profile/channel-CRUD/Create";
import { Fragment } from "react";
import { parseCookies } from "./../../utils/auth";

const Channels = ({ tokens }) => {
  const head = () => (
    <Head>
      <title> {process.env.APP_NAME} - channels </title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,archive,follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <meta
        name="description"
        content="Create your own customized channel on our website and attract large audience with your unique digital content. Hurry up and visit our website for more details."
      />
      <meta
        name="keywords"
        content="create a channel, create new channel, how to make a channel, how to create a channel, how to create a new channel, new channel create"
      />
      <meta
        name="title"
        content="Create a channel and publish content by using links"
      />
      <meta
        property="og:tags"
        content="create a channel, create new channel, how to make a channel, how to create a channel, how to create a new channel, new channel create"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Create a channel and publish content by using links"
      />
      <meta
        name="twitter:title"
        content="Create a channel and publish content by using links"
      />
      <meta
        property="og:description"
        content="Create your own customized channel on our website and attract large audience with your unique digital content. Hurry up and visit our website for more details."
      />
      <meta
        name="twitter:description"
        content="Create your own customized channel on our website and attract large audience with your unique digital content. Hurry up and visit our website for more details."
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(channelList(24));
  }, [dispatch]);

  const token = getCookie("token");
  React.useEffect(() => {
    tokens && dispatch(channelUnfollowedList(24, tokens));
  }, [tokens, dispatch]);

  const channelDesign = () => {
    return (
      <Fragment>
        {head()}
        {channel.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <ChannelList channel={channel} />
          </Fragment>
        )}
      </Fragment>
    );
  };
  const channelAuthDesign = () => {
    return (
      <Fragment>
        {head()}
        {channel.loading ? (
          <Loading />
        ) : (
          <Fragment>
            {/* <ChannelCreate /> */}
            <ChannelList channel={channel} />
          </Fragment>
        )}
      </Fragment>
    );
  };
  const channel = useSelector((state) => state.channel);
  return <div>{token ? channelAuthDesign() : channelDesign()}</div>;
};
Channels.getInitialProps = async ({ req, res }) => {
  const tokens = parseCookies(req).token;
  if (!tokens) {
    return {};
  } else {
    return { tokens };
  }
};

export default Channels;
