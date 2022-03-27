import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import SponsoreManagementMenu from "..";
import { sponosrePendingList } from "../../../../store/actions/admin/user";
import List from "./Card";
const ChannelSponsore = () => {
  const disptach = useDispatch();
  React.useEffect(() => {
    disptach(sponosrePendingList());
  }, []);
  return (
    <Fragment>
      <SponsoreManagementMenu />
      <List />
    </Fragment>
  );
};

export default ChannelSponsore;
