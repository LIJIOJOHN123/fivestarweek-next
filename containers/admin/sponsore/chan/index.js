import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import SponsoreManagementMenu from "..";
import { sponosrePendingList } from "../../../../store/actions/admin/user";
import ChannelList from "./List";
const Artsponsore = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(sponosrePendingList());
  }, []);
  return (
    <Fragment>
      <SponsoreManagementMenu />
      <ChannelList />
    </Fragment>
  );
};

export default Artsponsore;
