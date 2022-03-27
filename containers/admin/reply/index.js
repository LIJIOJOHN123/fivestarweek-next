import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyList } from "../../../store/actions/admin/user";
import ReplyCard from "./Card";
import Term from "./Term";

const ReplyList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(replyList(12));
  }, []);
  return (
    <Fragment>
      <Term />
      <div style={{ marginTop: 20 }}>
        <ReplyCard replies={user.replies} />
      </div>
    </Fragment>
  );
};

export default ReplyList;
