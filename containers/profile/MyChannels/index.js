import { Fragment } from "react";
import React from "react";
import ChannelList from "./List";
import CreateChannel from "../channel-CRUD/Create";
const ProfileBoard = () => {
  return (
    <Fragment>
      <CreateChannel />
      <ChannelList />
    </Fragment>
  );
};

export default ProfileBoard;
