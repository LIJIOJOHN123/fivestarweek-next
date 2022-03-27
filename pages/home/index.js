import React, { Fragment } from "react";
import Head from "next/head";
import ScrollUp from "../../components/Theme/ScrollUp";
import { useDispatch, useSelector } from "react-redux";
// import { articleFollowChannel } from "../../store/actions/user/article";
import Loading from "../../components/Theme/Loading";
import { getCookie } from "../../utils/auth";
// import ArticleList from "../../containers/03 home/List";
import Router from "next/router";
import AuthUser from "../../containers/auth/AuthUser";

const App = () => {
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
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="FiveStarWeek is maketplace for news, articles, videos and more"
      />
      <meta property="og:description" content="wemake thinks better" />
      <meta property="og:image" content="wemake thinks better" />
      <meta property="fb.app_id" content="606152919948429" />
      <meta name="title" content="wemake thinks better" />
      <meta name="description" content="wemake thinks better" />
      <meta name="keywords" content="wemake thinks bette" />
      <meta name="image" content="wemake thinks better" />
      <meta property="og:title" content="wemake thinks better" />
      <meta property="og:tags" content="wemake thinks bette" />
      <meta property="og:site_name" content="weMshare" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@weMshare" />
      <meta name="twitter:url" content="wemake thinks better" />
      <meta name="twitter:creator" content="weMshare" />
      <meta name="twitter:title" content="wemake thinks better" />
      <meta name="twitter:description" content="wemake thinks better" />
      <meta name="twitter:image" content="wemake thinks better" />
    </Head>
  );
  const dispatch = useDispatch();

  const token = getCookie("token");
  React.useEffect(() => {
    if (!token) {
      Router.push("/");
    }
    token && dispatch(articleFollowChannel(1, token));
  }, [token, dispatch]);
  const article = useSelector((state) => state.article);
  const authDesign = () => {
    return (
      <Fragment>
        {article.loading ? (
          <Loading />
        ) : (
          <Fragment>
            <ScrollUp>
              <AuthUser>
                dsldjslk
                {/* <ArticleList articles={article} /> */}
              </AuthUser>
            </ScrollUp>
          </Fragment>
        )}
      </Fragment>
    );
  };
  return (
    <div>
      <React.Fragment>
        {head()}
        {authDesign()}
      </React.Fragment>
    </div>
  );
};
export default App;
