import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getCookie } from "../../../utils/auth";
import { useDispatch } from "react-redux";
import {
  channelArticle,
  channelUnfollow,
} from "../../../store/actions/user/channel";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
  },
  img: {
    height: "60%",
    overflow: "hidden",
    width: "100%",
  },

  link: {
    textDecoration: "none",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    justifyContent: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  text2: {
    color: "black",
  },
  text1: {
    color: "gray",
    fontSize: 15,
  },
  bigAvatar: {
    width: 140,
    height: 140,
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
}));

const Card = ({ channelOne }) => {
  const {
    avatar,
    channel,
    channelName,
    follows,
    _id,
    sponsor,
    verifiedStatus,
  } = channelOne;
  const classes = useStyles();
  const token = getCookie("token");

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale);
  const authButton = () => {
    return (
      <div>
        {token ? (
          <Fragment>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                fontSize="small"
                className={classes.button1}
                onClick={() => dispatch(channelUnfollow(_id))}
              >
                {locale.unfollow}
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <Link href="/login">
              <div className={classes.button}>
                <Button color="primary" variant="contained">
                  {locale.unfollow}
                </Button>
              </div>
            </Link>
          </Fragment>
        )}
      </div>
    );
  };
  const handleClick = (id) => {
    dispatch(channelArticle(id, 20));
  };
  const view = (
    <div className={classes.card}>
      <Link href={`/channels/${_id}`}>
        <a className={classes.link} onClick={() => handleClick(_id)}>
          <Fragment>
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={avatar.image}
                className={classes.bigAvatar}
              />
            </div>
            <div className={classes.title}>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.text}
              >
                {channel}
                {verifiedStatus == 2 && (
                  <CheckCircleIcon
                    color="primary"
                    size="small"
                    style={{ marginTop: "-15" }}
                  />
                )}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                className={classes.text2}
              >
                @{channelName}
              </Typography>
            </div>
          </Fragment>
        </a>
      </Link>
      <Typography variant="body2" align="center" className={classes.text1}>
        {`${follows.length} followers`} <br />
        {sponsor === 3 && <Typography color="primary">sponsored</Typography>}
      </Typography>
      {authButton()}
      <br />
    </div>
  );
  return <Fragment>{view}</Fragment>;
};
export default Card;
