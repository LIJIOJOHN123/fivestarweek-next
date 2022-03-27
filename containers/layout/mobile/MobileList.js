import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { getCookie } from "../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/user/auth";
import Router from "next/router";

const useStyles = makeStyles({
  list: {
    width: 300,
    height: "100%",
    backgroundColor: "black",
    color: "white",
    paddingLeft: 10,
  },
  link1: {
    textDecoration: "none",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    textAlign: "left",
    textDecoration: "none",
    color: "blue",
    marginLeft: 30,
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  menu: {
    color: "white",
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
  menulogo: {
    textDecoration: "none",
    color: "#000000",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

const MobileSlide = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    left: false,
  });
  const locale = useSelector((state) => state.locale);
  const links = [
    { link: "/", name: `${locale.home}` },
    // { link: "/publisher", name: "Publisher" },
    // { link: "/survey", name: "Survey" },

    { link: "/channels", name: `${locale.channels}` },
    { link: "/workfromhome", name: `${locale.work}` },
    { link: "/publisher", name: `${locale.advertisement}` },
    { link: "/premium", name: `${locale.fivestarweekPremium}` },
    { link: "/contactus", name: `${locale.contactUs}` },
    { link: "/register", name: `${locale.register}` },
    { link: "/login", name: `${locale.login}` },
  ];

  const authLinks = [
    { link: "/home", name: `${locale.home}` },
    { link: "/trending", name: `${locale.trending}` },
    { link: "/channels", name: `${locale.channels}` },
    { link: "/publisher", name: `${locale.advertisement}` },
    { link: "/premium", name: `${locale.fivestarweekPremium}` },
    { link: "/contactus", name: `${locale.contactUs}` },
    { link: "/workfromhome", name: `${locale.work}` },

    // { link: "/survey", name: "Survey" },
  ];
  const token = getCookie("token");
  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Typography variant="h6" className={classes.menulogo}>
        <Link href="/">
          <a className={classes.menulogo}>
            <img
              src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/logo_website.png"
              width="250"
              height="50"
            />
          </a>
        </Link>
      </Typography>{" "}
      <List>
        {token
          ? authLinks.map((text, index) => (
              <ListItem key={text.name}>
                <Link href={text.link}>
                  <ListItemText primary={text.name} className={classes.name} />
                </Link>
              </ListItem>
            ))
          : links.map((text, index) => (
              <ListItem key={text.name}>
                <Link href={text.link}>
                  <ListItemText primary={text.name} className={classes.name} />
                </Link>
              </ListItem>
            ))}
        {token && (
          <ListItem>
            <a
              className={classes.links}
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(logout(token, () => Router.replace("/")));
              }}
            >
              <Typography className={classes.button}>
                {locale.logout}
              </Typography>
            </a>
          </ListItem>
        )}
      </List>
    </div>
  );
  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        {" "}
        <MenuIcon className={classes.menu} />{" "}
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};
export default MobileSlide;
