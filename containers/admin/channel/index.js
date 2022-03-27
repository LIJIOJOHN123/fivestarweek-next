import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelList } from "../../../store/actions/admin/user";
import ChannelCard from "./Card";
import Term from "./Term";

const ChannelList = () => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(channelList(12));
  }, []);
  return (
    <Fragment>
      <Term />

      <div style={{ marginTop: 20 }}>
        <ChannelCard channels={channel.channels} />
      </div>
    </Fragment>
  );
};

export default ChannelList;
