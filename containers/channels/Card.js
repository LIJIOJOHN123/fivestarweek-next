import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar, Button } from "@mui/material";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getCookie } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  channelArticle,
  channelFollow,
} from "../../store/actions/user/channel";
import { channelAuthView, channelIPView } from "../../action/visitor";
import axios from "axios";

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
}));

const Card = ({ channelOne, sponsore }) => {
  const {
    avatar,
    channel,
    channelName,
    follows,
    _id,
    slur,
    sponsor,
    verifiedStatus,
  } = channelOne;
  const classes = useStyles();
  const token = getCookie("token");
  React.useEffect(() => {
    let result = async () => {
      try {
        const ipdetails = await axios.get(
          "https://extreme-ip-lookup.com/json/"
        );
        const formData = {
          ip: ipdetails.data.query,
          city: ipdetails.data.city,
          country: ipdetails.data.country,
          region: ipdetails.data.region,
        };
        await channelAuthView(_id, token, formData);
      } catch (error) {
        console.log(error);
      }
    };
    return result;
  }, [token, _id]);
  React.useEffect(() => {
    let result = async () => {
      try {
        const ipdetails = await axios.get(
          "https://extreme-ip-lookup.com/json/"
        );
        const formData = {
          ip: ipdetails.data.query,
          city: ipdetails.data.city,
          country: ipdetails.data.country,
          region: ipdetails.data.region,
        };
        await channelIPView(_id, formData);
      } catch (error) {
        console.log(error);
      }
    };
  }, [_id]);
  const locale = useSelector((state) => state.locale);
  const guestButton = () => {
    return (
      <div>
        <Fragment>
          <Link href="/login">
            <div className={classes.button}>
              <Button color="primary" size="small" variant="contained">
                {locale.follow}
              </Button>
            </div>
          </Link>
        </Fragment>
      </div>
    );
  };
  const dispatch = useDispatch();
  const authButton = () => {
    return (
      <div>
        <Fragment>
          <div className={classes.button}>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={() => {
                dispatch(channelFollow(_id));
              }}
            >
              {locale.follow}
            </Button>
          </div>
        </Fragment>
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
        {sponsor === 3 && sponsore === false && (
          <Typography color="primary">sponsored</Typography>
        )}
      </Typography>
      {token ? authButton() : guestButton()}
      <br />
    </div>
  );
  return <Fragment>{view}</Fragment>;
};
export default Card;
