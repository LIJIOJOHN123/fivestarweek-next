import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { articleById } from "../../../store/actions/user/article";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  root1: {
    position: "relative",
  },
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  img: {
    height: 140,
    borderRadius: 5,
    width: "100%",
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  link1: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    marginTop: "-13%",
    marginLeft: "-3%",
  },

  button: {
    marginRight: 10,
  },
  like: {
    marginRight: "2%",
  },
  text: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
  },
  overlay: {
    position: "absolute",
    color: "white",
    backgroundColor: "blue",
    padding: 2,
  },
  time: {
    fontSize: "14px",
  },
  hide: {
    visibility: "hidden",
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  const { image, title, source, comments, _id, type, createdAt } = article;
  const limitTitle =
    title.length > 70 ? title.substring(0, 70) + "...." : title;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    const refresh = true;
    dispatch(articleById(id, 4, refresh));
  };
  const design = (
    <Fragment>
      <Link href={`/article/${_id}`}>
        <a className={classes.link} onClick={() => handleClick(_id)}>
          <Fragment>
            <div>
              <img className={classes.img} alt={image} src={image} />
            </div>
            <Typography variant="body2">
              <strong>{limitTitle}</strong>
            </Typography>
          </Fragment>
        </a>
      </Link>
      <div className={classes.time}></div>
      <Typography variant="body2"> {source}</Typography>
    </Fragment>
  );

  return <div className={classes.card}>{design}</div>;
};

export default Card;
