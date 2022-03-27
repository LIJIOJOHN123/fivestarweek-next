import React from "react";
import Router from "next/router";
import { isAuth } from "../../utils/auth";

const AuthUser = ({ children }) => {
  React.useEffect(() => {
    if (!isAuth()) {
      Router.push(`/login`);
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthUser;
