import React, { Fragment } from "react";
import Card from "./Card";
const ChannelDashboard = ({ channels, channelId }) => {
  return (
    <Fragment>
      <Card channels={channels} channelId={channelId} />
    </Fragment>
  );
};

export default ChannelDashboard;
