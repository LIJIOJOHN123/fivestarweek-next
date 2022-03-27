import React from "react";
import { makeStyles } from "@mui/styles";
import { Toolbar, AppBar, useScrollTrigger, Slide } from "@mui/material";
import MobileSlide from "./MobileList";
import Head from "next/head";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SearchIcon from "@mui/icons-material/Search";
import Router from "next/router";
import { useSelector } from "react-redux";
import { ColorModeContext } from "../../../pages/_app";
// import Alert from "../../../components/Alert";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },

  menu: {
    background: "black",
    height: 60,
  },
  button: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  mar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    fontSize: "20px",
    fontWeight: "bold",
  },
  darkstyle: {
    display: "flex",
    flexDirection: "row",
  },
}));

const Mobile = ({ themeValue }) => {
  const classes = useStyles();
  const [message, setMessage] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const alert = useSelector((state) => state.alert);
  React.useEffect(() => {
    alert.alerts && setMessage(alert.alerts);
    setOpen(true);
  }, [alert]);
  const trigger = useScrollTrigger();
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/top_icon.png"
        />
      </Head>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.app}>
          <Toolbar position="static" className={classes.menu}>
            {/* {open && message.msg && <Alert alert={message} />} */}
            <MobileSlide />
            <div className={classes.mar}>Fivestarweek</div>
            <div>
              <div className={classes.darkstyle}>
                {/* <Language /> */}
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
                <SearchIcon
                  style={{ marginLeft: 10, marginTop: 10 }}
                  onClick={() => Router.push("/search")}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <div className={classes.offset} />
    </div>
  );
};
export default Mobile;
