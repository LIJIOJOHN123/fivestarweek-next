import React from "react";
import { Fragment } from "react";
import ChanneList from "./List";
import SponsoredChannelList from "./Suggested";
import { getCookie } from "../../utils/auth";
import { useDispatch } from "react-redux";
import {
  channelSponsorePublic,
  channelSuggestedList,
} from "../../store/actions/user/channel";
import SponsoredChannel from "./Sponsore";

const List = ({ channel }) => {
  const token = getCookie("token");
  const language = getCookie("language");

  const dispatch = useDispatch();
  React.useEffect(() => {
    token && dispatch(channelSponsorePublic(20));
  }, []);
  React.useEffect(() => {
    dispatch(channelSuggestedList(12));
  }, [language, dispatch]);
  return (
    <Fragment>
      {token && <SponsoredChannel />}

      <SponsoredChannelList />

      <ChanneList channel={channel} />
    </Fragment>
  );
};

export default List;
