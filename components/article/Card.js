import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import moment from "moment";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { articleAuthView, articleIPView } from "../../action/visitor";
import { getCookie } from "../../utils/auth";
import axios from "axios";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      height: 150,
      display: "flex",
    },
  },
  sectionMobile: {
    height: 200,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  img: {
    borderRadius: 10,
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },

  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
  foot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  time: {
    fontSize: "14px",
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  const {
    image,
    title,
    source,
    comments,
    _id,
    channel,
    type,
    createdAt,
    viewIP,
    link,
  } = article;
  const limitTitle = title.length > 0 ? title.substring(0, 70) + "...." : title;
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
        token && (await articleAuthView(_id, token, formData));
      } catch (error) {
        console.log(error);
      }
    };
    return result;
  }, [_id, token]);
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
        ipdetails && (await articleIPView(_id, formData));
      } catch (error) {
        console.log(error);
      }
    };
    return result;
  }, [_id]);

  const design = (
    <Fragment>
      <Link href={`/article/${_id}`}>
        <a className={classes.link}>
          <div className={classes.link}>
            <Fragment>
              <div className={classes.sectionDesktop}>
                <img className={classes.img} alt="alt" src={image} />
              </div>
              <div className={classes.sectionMobile}>
                <img className={classes.img} alt="alt" src={image} />
              </div>
              <Typography>
                <strong>{limitTitle}</strong>
              </Typography>
            </Fragment>
            <div className={classes.time}></div>
            <Typography variant="body2"> {source}</Typography>
          </div>
        </a>
      </Link>
      <Link href={`/channels/${channel ? channel._id : ""}`}>
        <a
          className={classes.link}
          onClick={() => Router.push(`/channels/${channel ? channel._id : ""}`)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Avatar
              src={channel ? channel.avatar && channel.avatar.image : ""}
              style={{ marginRight: 10 }}
            />
            <Typography variant="body2" style={{ color: "gray" }}>
              {" "}
              {channel && channel.channel}
            </Typography>
          </div>
          <Typography
            variant="body2"
            style={{
              marginLeft: 50,
              marginTop: -20,
              marginBottom: 10,
              color: "gray",
            }}
          >
            {channel ? channel.channelName : ""}
          </Typography>
        </a>
      </Link>
      <div className={classes.foot}>
        <Typography className={classes.text}>{`${
          comments && comments.length
        } comments`}</Typography>
        <Typography className={classes.text}>{`${
          viewIP && viewIP.length
        } views`}</Typography>
        <Typography className={classes.text}>{`${moment(createdAt).fromNow(
          "seconds"
        )} ago `}</Typography>
      </div>
    </Fragment>
  );

  return <div className={classes.card}>{design}</div>;
};

export default Card;
