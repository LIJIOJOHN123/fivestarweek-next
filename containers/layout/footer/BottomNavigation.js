import React from "react";
import { makeStyles } from "@mui/styles";
import DnsIcon from "@mui/icons-material/Dns";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Router from "next/router";
import { getCookie } from "../../../utils/auth";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  icons: {
    "&$selected": {
      color: "red",
    },
    fontWeight: "bold",
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const token = getCookie("token");
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        className={classes.icons}
        icon={<HomeIcon fontSize="medium" />}
        onClick={() => Router.push("/home")}
      />
      <BottomNavigationAction
        className={classes.icons}
        label="Trending"
        icon={<TrendingUpIcon fontSize="medium" />}
        onClick={() => Router.push("/trending")}
      />
      <BottomNavigationAction
        className={classes.icons}
        label="Channels"
        icon={<DnsIcon fontSize="medium" />}
        onClick={() => Router.push("/channels")}
      />
      {token ? (
        <BottomNavigationAction
          className={classes.icons}
          label="Profile"
          icon={<LocationOnIcon fontSize="medium" />}
          onClick={() => Router.push("/profile")}
        />
      ) : (
        <BottomNavigationAction
          className={classes.icons}
          label="Login"
          icon={<LockOpenIcon fontSize="medium" />}
          onClick={() => Router.push("/login")}
        />
      )}
    </BottomNavigation>
  );
}
