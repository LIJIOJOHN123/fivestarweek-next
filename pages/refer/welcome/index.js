import React from "react";
import Head from "next/head";
import BannerImage from "../../../containers/refer/welcome/banner";
import { Button } from "@mui/material";
import Router from "next/router";
import Content from "../../../containers/refer/welcome/Content";
import { useDispatch, useSelector } from "react-redux";
import { publicReferalMessage } from "./../../../store/actions/user/auth";
import { getCookie } from "./../../../utils/auth";
const MarketingPage = () => {
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
        content="Do you wish to earn income without putting much efforts? Refer our website to your friend and earn good income easily."
      />
      <meta
        name="keywords"
        content="refer and earn, loyalty program, friends referral, referral program, refer & earn, refer and earn money, referral and earn, rewards program, refer and earn program, invite and earn, invitation referral, referral rewards"
      />
      <meta
        property="og:tags"
        content="refer and earn, loyalty program, friends referral, referral program, refer & earn, refer and earn money, referral and earn, rewards program, refer and earn program, invite and earn, invitation referral, referral rewards"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="og:title" content="Refer & Earn - Five Star Week" />
      <meta name="twitter:title" content="Refer & Earn - Five Star Week" />
      <meta name="title" content="Refer & Earn - Five Star Week" />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/index_image.png"
      />
      <meta
        property="og:description"
        content="Do you wish to earn income without putting much efforts? Refer our website to your friend and earn good income easily."
      />
      <meta
        name="twitter:description"
        content="Do you wish to earn income without putting much efforts? Refer our website to your friend and earn good income easily."
      />
      <meta property="og:type" content="article" />
    </Head>
  );
  const token = getCookie("token");
  const user = useSelector((state) => state.auth);
  const userIds = user.user ? user.user.userId : undefined;
  const dispatch = useDispatch();
  React.useEffect(() => {
    user && dispatch(publicReferalMessage(userIds));
  }, [user, userIds, dispatch]);
  return (
    <div>
      <React.Fragment>
        {head()}
        <BannerImage />
        <br />
        <Content />
        {userIds && (
          <div style={{ marginLeft: 10, marginTop: 40, marginBottom: 40 }}>
            <Button onClick={() => Router.push("/refer/refer")}>
              My refered user list
            </Button>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};
export default MarketingPage;
