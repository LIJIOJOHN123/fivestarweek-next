import React from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

const AdminUser = ({ children }) => {
  const user = useSelector((state) => state.auth);
  let allowed = user.user && user.user.isAd === true;
  return <React.Fragment>{allowed && children}</React.Fragment>;
};

export default AdminUser;
