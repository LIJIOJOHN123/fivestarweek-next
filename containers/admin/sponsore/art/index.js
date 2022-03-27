import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import SponsoreManagementMenu from "..";
import ArticleList from "./List";
const ChannelSponsore = () => {
  return (
    <Fragment>
      <SponsoreManagementMenu />
      <ArticleList />
    </Fragment>
  );
};

export default ChannelSponsore;
