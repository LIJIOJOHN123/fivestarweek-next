import React from "react";
import Router from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../../utils/auth";
import { logout } from "../../../store/actions/user/auth";
import { makeStyles, withStyles } from "@mui/styles";
import { Menu, MenuItem, ListItemText, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: 20,
    marginRight: 40,
    paddingRight: 20,
    width: "15%",
  },
})((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "white",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "black",
      },
    },
  },
}))(MenuItem);
const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  icon: {
    backgroundColor: "#092c74",
    color: "white",
  },
}));

export default function CustomizedMenus() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const token = getCookie("token");

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale);

  return (
    <div>
      <ArrowDropDownIcon
        size="large"
        className={classes.icon}
        onMouseOver={handleClick}
      />

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link href="/earnings">
            <a className={classes.link}>
              <ListItemText primary={locale.earnings} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/score">
            <a className={classes.link}>
              <ListItemText primary={locale.points} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/mychannels">
            <a className={classes.link}>
              <ListItemText primary={locale.mychannels} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/following">
            <a className={classes.link}>
              <ListItemText primary={locale.following} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/payment">
            <a className={classes.link}>
              <ListItemText primary={locale.payment} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/profile">
            <a className={classes.link}>
              <ListItemText primary={locale.comments} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/myaccount">
            <a className={classes.link}>
              <ListItemText primary={locale.myAccount} />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <a
            className={classes.link}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(logout(token, () => Router.replace("/")));
            }}
          >
            {" "}
            <Typography className={classes.button}>{locale.logout}</Typography>
          </a>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
