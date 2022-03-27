import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Typography, Button, Avatar } from "@mui/material";
import Router from "next/router";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationAllRead,
  notificationRead,
} from "../../store/actions/user/notificaiton";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#f0f0f0",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
  },
  text: {
    fontSize: 14,
  },
  read: {
    fontSize: 10,
  },
}));
const defaultProp = {
  bgcolor: "#ddd",
  borderColor: "text.primary",
  m: 1,
  border: 3,
  style: { width: "95%", margin: 10, borderColor: "white", marginTop: 10 },
};
const defaultProps = {
  bgcolor: "white",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "95%", margin: 10, borderColor: "white", marginTop: 10 },
};
export default function NestedList({ messages }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRead = async (id) => {
    dispatch(notificationRead(id, 5));
  };
  let notification = useSelector((state) => state.notification);
  const handleAllRead = async () => {
    dispatch(notificationAllRead(notification.limit));
  };
  const message = (item, type) => {
    if (type == "comment") {
      return (
        <Fragment>
          {item.readStatus === 0 ? (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProp}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          ) : (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProps}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          )}
        </Fragment>
      );
    } else if (type == "article") {
      return (
        <Fragment>
          {item.readStatus === 0 ? (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProp}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          ) : (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProps}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          )}
        </Fragment>
      );
    } else if (type == "channel") {
      return (
        <Fragment>
          {item.readStatus === 0 ? (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProp}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          ) : (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProps}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          )}
        </Fragment>
      );
    } else if (type === "welcome") {
      return (
        <Fragment>
          {item.readStatus === 0 ? (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProp}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          ) : (
            <a
              className={classes.link}
              onClick={() => {
                Router.push(`${item.webRedirection}`);
                handleRead(item._id);
              }}
            >
              <Box borderRadius="borderRadius" {...defaultProps}>
                <ListItem button>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Avatar src={item.whoAvatar} />
                    </div>
                    <Typography className={classes.text}>
                      {item.message}
                    </Typography>
                  </div>
                </ListItem>
                <div style={{ marginLeft: 10 }}>
                  <Typography align="right" style={{ fontSize: 12 }}>
                    {moment(item.createdAt).fromNow()}
                  </Typography>
                </div>
              </Box>
            </a>
          )}
        </Fragment>
      );
    }
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <Typography align="center" color="primary" variant="h6">
        Notifications
      </Typography>
      <Button size="small" style={{ marginLeft: 5 }} onClick={handleAllRead}>
        {" "}
        Mark all read
      </Button>
      {messages.map((item) => {
        return <Fragment key={item._id}>{message(item, item.type)}</Fragment>;
      })}
    </List>
  );
}
