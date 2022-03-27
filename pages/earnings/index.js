import React, { Fragment } from "react";
import Head from "next/head";
import EarningCard from "../../containers/profile/Earnings";
import AuthUser from "../../containers/auth/AuthUser";
import ProfileBoard from "../../containers/profile";
import { useDispatch, useSelector } from "react-redux";
import { earninList, scoreList } from "../../store/actions/user/payment";
import { publicProfile } from "../../store/actions/user/auth";
import Loading from "../../components/Theme/Loading";
import { NextSeo } from "next-seo";

const ScorePage = () => {
  const head = () => <Head></Head>;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(earninList(50));
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
            <EarningCard />
          </Fragment>
        )}
      </AuthUser>
    </Fragment>
  );
};

export default ScorePage;
