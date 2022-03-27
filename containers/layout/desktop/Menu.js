import React, { Fragment } from "react";
import { Typography, Toolbar, AppBar } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SearchIcon from "@mui/icons-material/Search";
import { getCookie } from "../../../utils/auth";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import DropMenu from "./DropMenu";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificatonMessage from "../../notification/index";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import Language from "./Language";
import { ColorModeContext } from "../../../pages/_app";
import Alert from "../../../components/alert/index";
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  textStyle: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 9,
    fontSize: 18,
  },
  button: {
    fontWeight: "bold",
  },
  menulogo: {
    textDecoration: "none",
    color: "#FFFFFF",
    marginLeft: 10,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  menuitems: {
    marginLeft: 10,
  },
  toolbar: {
    background: "#092C74",
    height: 60,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontFamily: "CG Times",
  },
  darkstyle: {
    marginLeft: 15,
  },
  search: {
    marginLeft: 40,
  },
  notifcation: {
    marginLeft: 10,
  },
}));
//advetitsemnt

const MenuBar = () => {
  const classes = useStyles();
  const token = getCookie("token");
  const handleSearch = () => {
    Router.push("/search");
  };
  const locale = useSelector((state) => state.locale);
  const [message, setMessage] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const alert = useSelector((state) => state.alert);
  const user = useSelector((state) => state.auth);
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  React.useEffect(() => {
    alert.alerts && setMessage(alert.alerts);
    setOpen(true);
  }, [alert]);
  const menuItems = () => {
    return (
      <Fragment>
        <div className={classes.menuitems}>
          {token ? (
            <Link href="/home">
              <a className={classes.link}>
                <Typography className={classes.textStyle}>
                  {locale.home}
                </Typography>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a className={classes.link}>
                <Typography className={classes.textStyle}>
                  {locale.home}{" "}
                </Typography>
              </a>
            </Link>
          )}
        </div>
        {token ? (
          <div className={classes.menuitems}>
            <Link
              href="/trending"
              onClick={() => Router.push("/trending")}
              className={classes.link}
            >
              <a className={classes.link}>
                <Typography className={classes.textStyle}>
                  {locale.trending}
                </Typography>
              </a>
            </Link>
          </div>
        ) : (
          <Fragment>
            <div className={classes.menuitems}>
              <Link
                href="/channels"
                onClick={() => Router.push("/channels")}
                className={classes.link}
              >
                <a className={classes.link}>
                  <Typography className={classes.textStyle}>
                    {locale.channels}
                  </Typography>
                </a>
              </Link>
            </div>
          </Fragment>
        )}
        {token && (
          <div className={classes.menuitems}>
            <Link
              href="/channels"
              onClick={() => Router.push("/channels")}
              className={classes.link}
            >
              <a className={classes.link}>
                <Typography className={classes.textStyle}>
                  {locale.channels}
                </Typography>
              </a>
            </Link>
          </div>
        )}

        {token && (
          <Fragment>
            <div className={classes.menuitems}>
              <Link
                href="/publisher"
                onClick={() => Router.push("/publisher")}
                className={classes.link}
              >
                <a className={classes.link}>
                  <Typography className={classes.textStyle}>
                    {locale.advertisement}
                  </Typography>
                </a>
              </Link>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };

  const authMenu = () => {
    return (
      <Fragment>
        <div className={classes.notifcation}>
          <NotificatonMessage />
        </div>
        <Link href="/profile">
          <a className={classes.link} onClick={() => Router.push("/profile")}>
            <Typography className={classes.button}>
              {JSON.parse(localStorage.getItem("user")).name.split(" ")[0]}
            </Typography>
          </a>
        </Link>
        <Avatar
          avatar={JSON.parse(localStorage.getItem("user")).avatar.image}
        />

        <DropMenu />
      </Fragment>
    );
  };

  const guestMenu = () => {
    return (
      <Fragment>
        <div className={classes.menuitems}>
          <Link href="/register">
            <a
              className={classes.link}
              onClick={() => Router.push("/register")}
            >
              {" "}
              <Typography className={classes.textStyle}>
                {locale.register}
              </Typography>
            </a>
          </Link>
        </div>
        <div className={classes.menuitems}>
          <Link href="/login">
            <a className={classes.link} onClick={() => Router.push("/login")}>
              {" "}
              <Typography className={classes.textStyle}>
                {locale.login}
              </Typography>
            </a>
          </Link>
        </div>
      </Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Head>
          <link
            rel="shortcut icon"
            href="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/icon_android.png"
            sizes="32x32"
          />
        </Head>
        <Toolbar className={classes.toolbar} position="static">
          {token ? (
            <Link href="/home">
              <a style={{ marginTop: 10, marginBottom: 5 }}>
                <img
                  src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/website_logs.png"
                  width="250"
                  height="50"
                />
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a style={{ marginTop: 10, marginBottom: 5 }}>
                <img
                  src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/website_logs.png"
                  width="250"
                  height="50"
                />
              </a>
            </Link>
          )}
          {open && message.msg && <Alert alert={message} />}

          {menuItems()}
          {token && (
            <SearchIcon
              onClick={() => handleSearch()}
              className={classes.search}
            />
          )}

          <Typography className={classes.title}></Typography>
          <div style={{ marginRight: -10 }}>
            <Language />
          </div>

          <div className={classes.darkstyle}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
          {token ? <Fragment>{authMenu()}</Fragment> : guestMenu()}
        </Toolbar>
      </AppBar>

      <Offset />
    </div>
  );
};

export default MenuBar;
