import { Typography, Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useSelector } from "react-redux";
import EditProfile from "./Edit";
import EmailChange from "./EmailChange";
import PasswordChange from "./PasswordChange";
import EditUsername from "./UserChange";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  root: {
    marginTop: 10,
  },
  item: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: 10,
  },
  item1: {
    marginRight: 6,
  },
  head: {
    fontWeight: "bold",
  },
});
const Profile = () => {
  const classes = useStyle();
  const profile = useSelector((state) => state.auth);
  const profileUser = profile.user ? profile.user : {};
  const personalData = profile.publicProfile
    ? profile.publicProfile.preference
    : {};
  return (
    <Fragment>
      <div className={classes.root}>
        <br />
        <Grid container>
          <Grid item lg={3}>
            <Typography align="center" className={classes.head}>
              Name
            </Typography>
            <Paper className={classes.item}>
              <div className={classes.item1}>
                <AccountCircleIcon size="large" />
              </div>
              <Typography>{profileUser.name}</Typography>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Typography align="center" className={classes.head}>
              username
            </Typography>
            <Paper className={classes.item}>
              <div className={classes.item1}>
                <PersonIcon size="large" />
              </div>
              <Typography>{profileUser.userName}</Typography>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Typography align="center" className={classes.head}>
              Email
            </Typography>
            <Paper className={classes.item}>
              <div className={classes.item1}>
                <EmailIcon size="large" />
              </div>
              <Typography>{profileUser.email}</Typography>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Typography align="center" className={classes.head}>
              Phone Number
            </Typography>
            <Paper className={classes.item}>
              <div className={classes.item1}>
                <PhoneIcon size="large" />
              </div>
              <Typography>{`${profileUser.phoneCode}-${profileUser.mobile}`}</Typography>
            </Paper>
          </Grid>

          <br />

          <Grid item lg={3}>
            <Paper className={classes.item}>
              <EditProfile profileUser={profileUser} />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.item}>
              <EmailChange profileUser={profileUser} />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.item} profileUser={profileUser}>
              <PasswordChange profileUser={profileUser} />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.item}>
              <EditUsername profileUser={profileUser} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Profile;
