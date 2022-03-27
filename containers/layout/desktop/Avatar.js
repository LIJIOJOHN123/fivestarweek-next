import React from "react";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.1),
      paddingTop: "-65",
    },
  },
  bigAvatar: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 10,
  },
}));

const Avatars = ({ avatar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
    </div>
  );
};
export default Avatars;
