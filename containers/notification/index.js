import React from "react";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Message from "./Notification.js";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

import Loading from "../../components/Theme/Loading.js";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(5),
  },
  margin: {
    marginTop: 20,
    minWidth: 80,
  },
  icon: {
    color: "white",
  },
  notes: {
    marginRight: 15,
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [opens, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const notification = useSelector((state) => state.notification);
  return (
    <div>
      <Badge
        badgeContent={notification.unread}
        color="error"
        className={classes.notes}
      >
        <NotificationsIcon
          aria-describedby={id}
          variant="contained"
          className={classes.icon}
          onClick={handleClick}
        ></NotificationsIcon>
      </Badge>

      <div>
        <Popover
          className={classes.margin}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {notification.loading && opens ? (
            <Loading />
          ) : (
            <Message messages={notification.notifications} />
          )}
        </Popover>
      </div>
    </div>
  );
}
