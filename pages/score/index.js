import React, { Fragment } from "react";
import Head from "next/head";
import ScoreCard from "../../containers/profile/score";
import AuthUser from "../../containers/auth/AuthUser";
import ProfileBoard from "../../containers/profile";
import { useDispatch, useSelector } from "react-redux";
import { scoreList } from "../../store/actions/user/payment";
import { publicProfile } from "../../store/actions/user/auth";
import Loading from "../../components/Theme/Loading";
import { NextSeo } from "next-seo";

const ScorePage = () => {
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(scoreList(50));
  }, [dispatch]);
  const user = useSelector((state) => state.auth);
  React.useEffect(() => {
    user.user && dispatch(publicProfile(user.user._id));
  }, [user.user, dispatch]);
  const payment = useSelector((state) => state.payment);
  return (
    <Fragment>
      <AuthUser>
        <NextSeo noindex={true} />
        {head()}
        {payment.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <ProfileBoard />
            <ScoreCard />
          </Fragment>
        )}
      </AuthUser>
    </Fragment>
  );
};

export default ScorePage;
