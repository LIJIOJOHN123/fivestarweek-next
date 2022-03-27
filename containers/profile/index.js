import { Fragment } from "react";
import { Button } from "@mui/material";
import React from "react";
import TopMenu from "./TopMenu";
import Router from "next/router";
import { useSelector } from "react-redux";

const ProfileBoard = () => {
  const user = useSelector((state) => state.auth);
  const locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      <Button onClick={() => Router.push("/profile")}>{locale.comments}</Button>
      <Button onClick={() => Router.push("/mychannels")}>
        {locale.mychannels}
      </Button>
      <Button onClick={() => Router.push("/following")}>
        {locale.following}
      </Button>
      <Button onClick={() => Router.push("/score")}>{locale.points}</Button>
      <Button onClick={() => Router.push("/earnings")}>
        {locale.earnings}
      </Button>
      <Button onClick={() => Router.push("/payment")}>{locale.payment}</Button>
      <Button onClick={() => Router.push("/myaccount")}>
        {locale.myAccount}
      </Button>
      <TopMenu />
    </Fragment>
  );
};

export default ProfileBoard;
