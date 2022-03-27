import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Link from "next/link";
import moment from "moment";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { articleAuthView, articleIPView } from "../../action/visitor";
import { getCookie } from "../../utils/auth";
import axios from "axios";
import { FaComment } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  img: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },

  text: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },

  time: {
    fontSize: "14px",
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();

  const design = (
    <Fragment>
      <Link href="3">
        <a className={classes.link}>
          <div className={classes.link}>
            <Fragment>
              <div>
                <img
                  className={classes.img}
                  alt="dskslkf"
                  src="https://img-mm.manoramaonline.com/content/dam/mm/mo/technology/defense/images/2021/11/1/army-shelling-myanmar.jpg.image.845.440.jpg"
                />
              </div>
              <Typography variant="body2">
                <strong>dakfdalkfja</strong>
              </Typography>
            </Fragment>
            <div className={classes.time}></div>
            <Typography variant="body2">publisher: dlajfdkalsj</Typography>
          </div>
        </a>
      </Link>
    </Fragment>
  );

  return <div className={classes.card}>{design}</div>;
};

export default Card;
