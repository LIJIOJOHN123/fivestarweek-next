import React from "react";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: 80,
    height: 80,
  },
}));

export default function ImageAvatars({ avatar }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
    </div>
  );
}
