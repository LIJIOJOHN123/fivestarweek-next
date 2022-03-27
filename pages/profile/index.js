import React, { Fragment } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../../containers/profile/comment/index";
import ProfileBoard from "../../containers/profile";

import { commetByUser } from "../../store/actions/user/comment";
import { publicProfile } from "../../store/actions/user/auth";
import Loading from "../../components/Theme/Loading";
import { NextSeo } from "next-seo";

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
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  React.useEffect(() => {
    user.user && dispatch(commetByUser(user.user._id, 21));
  }, [user.user, dispatch]);
  React.useEffect(() => {
    user.user && dispatch(publicProfile(user.user._id));
  }, [user.user, dispatch]);
  return (
    <Fragment>
      {head()}
      <NextSeo noindex={true} />

      {comment.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <ProfileBoard /> <CommentList comment={comment} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfilePage;
