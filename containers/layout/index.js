import React, { Fragment } from "react";
import DesktopMenu from "./desktop/Menu";
import MobileMenu from "./mobile";
import { makeStyles } from "@mui/styles";
import { getCookie } from "../../utils/auth";
import { localeList } from "../../store/actions/user/locale";
import { authUserLoaded } from "../../store/actions/user/auth";
import { notificationList } from "../../store/actions/user/notificaiton";
import { useDispatch } from "react-redux";
import { languageList } from "../../store/actions/user/langauge";
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
  React.useEffect(() => {
    dispatch(localeList(result));
  }, [dispatch, result]);
  React.useEffect(() => {
    dispatch(languageList());
  }, [dispatch, language]);
  React.useEffect(() => {
    if (token) {
      dispatch(authUserLoaded(token));
      dispatch(notificationList(5, token));
    }
  }, [token, dispatch]);
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
