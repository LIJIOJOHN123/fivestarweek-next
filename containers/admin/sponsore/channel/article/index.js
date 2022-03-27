import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import SponsoreManagementMenu from "..";
import { articleSponsoreList } from "../../../../store/actions/admin/user";
import ArticleList from "./List";
const ArticleSponsore = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(articleSponsoreList());
  }, []);
  return (
    <Fragment>
      <SponsoreManagementMenu />
      <ArticleList />
    </Fragment>
  );
};

export default ArticleSponsore;
