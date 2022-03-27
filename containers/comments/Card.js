import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Badge, Avatar, Grid, Divider } from "@mui/material";
// import Reply from "../12 replies";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditComment from "./Edit";
import Delete from "./Delete";
import { getCookie } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { commentLike, commentUnlike } from "../../store/actions/user/comment";
import Router from "next/router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles((theme) => ({
  roots: {
    marginTop: "3%",
    marginRight: "3%",
    marginBottom: "3%",
    padding: "3%",
    borderRadius: "2%",
    backgroundColor: "#f5f5f5",
  },
  details: {
    display: "flex",
    margin: 10,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  avatar: {
    marginRigh: "auto",
    height: 50,
    width: 50,
    flexShrink: 0,
    flexGrow: 0,
  },
  name: {
    display: "flex",
  },
  icons: {
    display: "flex",
    flexWrap: 1,
  },
  icons1: {
    flexWrap: 1,
    color: "gray",
    fontWeight: "bold",
    marginRight: theme.spacing(2),
  },
  icon2: {
    marginRight: theme.spacing(2),
  },
  main: {
    display: "flex",
  },
  displayRight: {
    textAlign: "right",
    fontSize: "12px",
  },
  name: {
    fontSize: "12px",
  },

  buttons: {
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "blue",
    marginRight: 3,
    borderRadius: 2,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  sectionMobile: {
    display: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const CommentCard = ({ commentOne, posts }) => {
  const classes = useStyles();
  const { comment, title, likes, reply, createdAt, _id, user } = commentOne;
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const token = getCookie("token");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const handleLike = async () => {
    dispatch(commentLike(_id, posts, comments.limit));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const haldeClickClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setOpenDelete(true);
    setOpens(true);
  };

  const handleClose = () => {
    setOpenDelete(false);
  };
  const users = useSelector((state) => state.auth);
  const handleUnlike = async () =>
    dispatch(commentUnlike(_id, posts, comments.limit));
  let likeVerfication = [];
  let validateUser;
  if (users.user) {
    likeVerfication = likes.filter((like) => like.user === users.user._id);
    validateUser = users.user._id === user;
  }
  let authUser = users.user && user._id === users.user._id;
  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        <div className={classes.roots}>
          <Grid container>
            <Grid lg={3} xl={2} sm={12} xm={12} md={6}>
              <a
                onClick={() => Router.push(`/user/${user}`)}
                className={classes.link}
              >
                {(user.premiumType === 0 || user.premiumType === 1) && (
                  <Avatar className={classes.avatar} src={user.avatar.image} />
                )}
                <Fragment>
                  {(user.premiumType === 3 || user.premiumType === 2) && (
                    <Badge
                      color="primary"
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent={
                        <CheckCircleIcon
                          style={{
                            fontSize: 10,
                            padding: 0,
                            color: "white",
                          }}
                        />
                      }
                    >
                      <Avatar
                        className={classes.avatar}
                        src={user.avatar.image}
                      />
                    </Badge>
                  )}
                  <div style={{ marginTop: 10 }}>
                    <Typography className={classes.name} color="primary">
                      {user.name}
                    </Typography>
                  </div>
                </Fragment>
              </a>
            </Grid>
            <Grid lg={9}>
              <div classes={classes.main}>
                <Typography className={classes.displayRight}>
                  {" "}
                  {moment(createdAt).fromNow("seconds")}
                </Typography>
              </div>
              <Typography gutterBottom variant="h6" style={{ marginLeft: 10 }}>
                {title && title.length > 45
                  ? title.slice(0, 45) + "....."
                  : title}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <br />
          <Typography gutterBottom variant="body2">
            {comment.length > 150 ? comment.slice(0, 150) + "....." : comment}
          </Typography>

          <div className={classes.details}>
            <div>
              <div></div>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              ></Typography>
              <div>
                <div className={classes.icons}>
                  <Typography className={classes.icons1}>
                    {likes.length} likes
                  </Typography>
                  <Typography className={classes.icons1}>
                    {reply.length} replies
                  </Typography>
                  {token && (
                    <Fragment>
                      {likeVerfication[0] ? (
                        <ThumbDownAltIcon
                          color="primary"
                          className={classes.icon2}
                          onClick={() => handleUnlike()}
                          fontSize="small"
                        />
                      ) : (
                        <ThumbUpAltIcon
                          color="primary"
                          className={classes.icon2}
                          onClick={() => handleLike()}
                          fontSize="small"
                        />
                      )}
                      {authUser && (
                        <EditIcon
                          variant="contained"
                          fontSize="small"
                          className="button"
                          color="primary"
                          style={{ marginRight: 10 }}
                          posts={posts}
                          onClick={() => handleClickOpen()}
                        />
                      )}
                      {authUser && (
                        <DeleteIcon
                          variant="contained"
                          fontSize="small"
                          color="primary"
                          style={{ marginRight: 10 }}
                          onClick={() => handleDelete()}
                        ></DeleteIcon>
                      )}
                      {authUser && open && (
                        <EditComment
                          setOpen={setOpen}
                          comment={commentOne}
                          open={open}
                          haldeClickClose={haldeClickClose}
                        />
                      )}
                      {authUser && opens && (
                        <Delete
                          handleClose={handleClose}
                          open={openDelete}
                          id={_id}
                        />
                      )}
                    </Fragment>
                  )}
                  {/* <Reply className={classes.icon2} id={_id} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className={classes.roots}>
          <Grid container>
            <Grid lg={3} xl={2} sm={12} xm={12} md={6}>
              <a
                onClick={() => Router.push(`/user/${user}`)}
                className={classes.link}
              >
                {(user.premiumType === 0 || user.premiumType === 1) && (
                  <Avatar className={classes.avatar} src={user.avatar.image} />
                )}
                <Fragment>
                  {(user.premiumType === 3 || user.premiumType === 2) && (
                    <Badge
                      color="primary"
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent={
                        <CheckCircleIcon
                          style={{
                            fontSize: 10,
                            padding: 0,
                            color: "white",
                          }}
                        />
                      }
                    >
                      <Avatar
                        className={classes.avatar}
                        src={user.avatar.image}
                      />
                    </Badge>
                  )}
                  <div style={{ marginTop: 10 }}>
                    <Typography className={classes.name} color="primary">
                      {user.name}
                    </Typography>
                  </div>
                </Fragment>
              </a>
            </Grid>
            <Grid lg={9} sm={9} xs={9} md={10}>
              <div classes={classes.main}>
                <Typography className={classes.displayRight}>
                  {" "}
                  {moment(createdAt).fromNow("seconds")}
                </Typography>
              </div>
              <Typography gutterBottom variant="h6" style={{ marginLeft: 10 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <br />
          <Typography gutterBottom variant="body2">
            {comment}
          </Typography>

          <div className={classes.details}>
            <div>
              <div></div>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              ></Typography>
              <div>
                <div className={classes.icons}>
                  <Typography className={classes.icons1}>
                    {likes.length} likes
                  </Typography>
                  <Typography className={classes.icons1}>
                    {reply.length} replies
                  </Typography>
                  {token && (
                    <Fragment>
                      {likeVerfication[0] ? (
                        <ThumbDownAltIcon
                          color="primary"
                          fontSize="small"
                          className={classes.icon2}
                          onClick={() => handleUnlike()}
                        />
                      ) : (
                        <ThumbUpAltIcon
                          color="primary"
                          className={classes.icon2}
                          fontSize="small"
                          onClick={() => handleLike()}
                        />
                      )}
                      {authUser && (
                        <EditIcon
                          variant="contained"
                          className="button"
                          color="primary"
                          style={{ marginRight: 10 }}
                          posts={posts}
                          fontSize="small"
                          onClick={() => handleClickOpen()}
                        />
                      )}
                      {authUser && (
                        <DeleteIcon
                          variant="contained"
                          color="primary"
                          style={{ marginRight: 10 }}
                          fontSize="small"
                          onClick={() => handleDelete()}
                        ></DeleteIcon>
                      )}
                      {/* {authUser && open && (
                        <EditComment
                          setOpen={setOpen}
                          comment={commentOne}
                          open={open}
                          haldeClickClose={haldeClickClose}
                        />
                      )}
                      {authUser && opens && (
                        <Delete
                          handleClose={handleClose}
                          open={openDelete}
                          id={_id}
                        />
                      )} */}
                    </Fragment>
                  )}
                  {/* <Reply className={classes.icon2} id={_id} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentCard;
