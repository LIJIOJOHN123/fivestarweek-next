import React, { Fragment } from "react";
import DesktopMenu from "./desktop/Menu";
import MobileMenu from "./mobile";
import { makeStyles } from "@mui/styles";
import { getCookie } from "../../utils/auth";
import { useDispatch } from "react-redux";
const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Menu = ({ children, themeValue }) => {
  const classes = useStyle();
  //token and langauge
  const dispatch = useDispatch();
  const token = getCookie("token");
  const result = getCookie("languageName");
  const language = getCookie("language");

  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        <DesktopMenu themeValue={themeValue} />
      </div>
      <div className={classes.sectionMobile}>
        <MobileMenu themeValue={themeValue} />
      </div>
      {children}
    </Fragment>
  );
};

export default Menu;
