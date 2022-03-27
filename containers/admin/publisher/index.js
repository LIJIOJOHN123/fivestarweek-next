import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publisherList } from "../../../store/actions/admin/user";
import Card from "./Card";
const UserList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(publisherList());
  }, []);

  return (
    <Fragment>
      <div style={{ marginTop: 20 }}>
        <Card publisher={user.publisherList} />
      </div>
    </Fragment>
  );
};

export default UserList;
