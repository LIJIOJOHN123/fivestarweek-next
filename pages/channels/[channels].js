import React, { Fragment } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { channelArticle } from "../../store/actions/user/channel";
import ChannelDashboard from "../../containers/channel/Dashboard";
import axios from "axios";
import { channelAuthVisit, channelIPVisit } from "../../action/visitor";
import { getCookie } from "../../utils/auth";
import { wrapper } from "../../store/store";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    margin: 0,
    marginTop: 25,
    marginLeft: 2,
    marginRight: 3,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
}));
const ChannelById = ({ channels, channelId }) => {
  const classes = useStyles();
  const head = () => (
    <Head>
      <title> {process.env.APP_NAME} - channel</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,archive,follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <meta
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/follow-me-in-my-blog-2021-08-28-05-51-25-utc.jpg"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/follow-me-in-my-blog-2021-08-28-05-51-25-utc.jpg"
      />

      <meta
        name="title"
        content={`${channels.channel.channel} - Fivestarweek`}
      />
      <meta name="keywords" content={`${channels.channel.keywords}`} />
      <meta property="og:tags" content={`${channels.channel.keywords}`} />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content={`${channels.channel.channel} - Fivestarweek`}
      />
      <meta name="twitter:title" content={`${channels.channel.introduction}`} />
      <meta
        property="og:description"
        content={`${channels.channel.introduction}`}
      />
      <meta
        name="twitter:description"
        content={`${channels.channel.introduction}`}
      />
      <meta name="description" content={`${channels.channel.introduction}`} />
      <meta property="og:type" content="article" />
    </Head>
  );

  const dispatch = useDispatch();
  const token = getCookie("token");
  React.useEffect(() => {
    const result = async () => {
      const ipdetails = await axios.get("https://extreme-ip-lookup.com/json/");
      const formData = {
        ip: ipdetails.data.query,
        city: ipdetails.data.city,
        country: ipdetails.data.country,
        region: ipdetails.data.region,
      };

      await channelAuthVisit(channelId, token, formData);
    };
    return result;
  }, [token, channelId]);
  React.useEffect(() => {
    const result = async () => {
      try {
        const ipdetails = await axios.get(
          "https://extreme-ip-lookup.com/json/"
        );
        const formData = {
          ip: ipdetails.data.query,
          city: ipdetails.data.city,
          country: ipdetails.data.country,
          region: ipdetails.data.region,
        };
        await channelIPVisit(channelId, formData);
      } catch (error) {}
      return result;
    };
  }, [channelId]);
  React.useEffect(() => {
    channelId && dispatch(channelArticle(channelId, 20, false));
  }, [channelId, dispatch]);
  return (
    <Fragment>
      {head()}
      <div className={classes.sectionDesktop}>
        <ChannelDashboard channels={channels} channelId={channelId} />
      </div>
    </Fragment>
  );
};

ChannelById.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/channels/${query.channels}?limit=20`
  );
  return {
    channels: res.data,
    channelId: query.channels,
  };
};

export default ChannelById;
