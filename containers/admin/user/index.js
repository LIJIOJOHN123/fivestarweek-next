import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userList } from "../../../store/actions/admin/user";
import Term from "./Term";
import Card from "./Card";
const UserList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(userList(12));
  }, []);

  return (
    <Fragment>
      <Term />
      <div style={{ marginTop: 20 }}>
        <Card users={user.users} />
      </div>
    </Fragment>
  );
};

export default UserList;
