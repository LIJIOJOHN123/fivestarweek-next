import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleList } from "../../../store/actions/admin/user";
import UserCard from "./Card";
import Term from "./Term";

const ArticleList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(articleList(12));
  }, []);
  return (
    <Fragment>
      <Term />
      <div style={{ marginTop: 20 }}>
        <UserCard articles={user.articles} />
      </div>
    </Fragment>
  );
};

export default ArticleList;
