import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentList } from "../../../store/actions/admin/user";
import CommentCard from "./Card";
import Term from "./Term";

const CommentList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(commentList(12));
  }, []);
  return (
    <Fragment>
      <Term />
      <div style={{ marginTop: 20 }}>
        <CommentCard comments={user.comments} />
      </div>
    </Fragment>
  );
};

export default CommentList;
