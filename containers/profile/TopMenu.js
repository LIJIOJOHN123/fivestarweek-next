import { Fragment } from "react";
import { Typography, Grid, Paper, Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomizedDialogs from "./../premium/index";
import AvatarButton from "./avatar/Dialog";
import Loading from "../../components/Theme/Loading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Router from "next/router";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    marginLeft: 20,
    marginTop: 20,
    flex: 1,
  },

  avatar: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 50,
  },
  item: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
  },

  normal: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    backgroundColor: theme.palette.grey[100],
    border: `5px solid #808080`,
    color: theme.palette.info.main,
  },
  silver: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    backgroundColor: theme.palette.grey[100],
    border: `5px solid #C0C0C0`,
    color: theme.palette.info.main,
  },
  gold: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    backgroundColor: theme.palette.grey[100],
    border: `5px solid #d4af37`,
    color: theme.palette.info.main,
  },
  diamond: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    backgroundColor: theme.palette.grey[100],
    border: `5px solid #b9f2ff `,
    color: theme.palette.info.main,
  },
}));
const TopMenu = () => {
  const classes = useStyle();
  const profile = useSelector((state) => state.auth);
  const profileInfo = profile.publicProfile ? profile.publicProfile : {};
  const user = profileInfo.user ? profileInfo.user : {};
  const users = profile.user ? profile.user : {};
  const locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      {profile.loading ? (
        <Loading />
      ) : (
        <Fragment>
          {" "}
          <Grid container>
            <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
              <Paper className={classes.container}>
                <div className={classes.item}>
                  {users.premiumType == 0 && (
                    <div className={classes.avatar}>
                      <Avatar
                        className={classes.normal}
                        src={user.avatar ? user.avatar.image : "none"}
                        zoom
                      />

                      <AvatarButton />
                    </div>
                  )}
                  {users.premiumType == 1 && (
                    <div className={classes.silver}>
                      <Avatar
                        className={classes.silver}
                        src={user.avatar ? user.avatar.image : "none"}
                        zoom
                      />
                      <AvatarButton />
                    </div>
                  )}
                  {users.premiumType === 2 && (
                    <div className={classes.avatar}>
                      <Avatar
                        className={classes.gold}
                        src={user.avatar ? user.avatar.image : "none"}
                        zoom
                      />

                      <CheckCircleIcon
                        color="primary"
                        size="small"
                        style={{ marginTop: "-15" }}
                      />

                      <AvatarButton />
                    </div>
                  )}
                  {users.premiumType === 3 && (
                    <div className={classes.avatar}>
                      <Avatar
                        className={classes.diamond}
                        src={user.avatar ? user.avatar.image : "none"}
                        zoom
                      />

                      <AvatarButton />
                    </div>
                  )}
                  <Typography align="center" variant="h6">
                    {user.name}
                    {(users.premiumType === 3 || users.premiumType === 2) && (
                      <CheckCircleIcon color="primary" size="small" />
                    )}
                  </Typography>
                  <Typography align="center">@{user.userName}</Typography>
                  {!users.isPremium && (
                    <Typography
                      style={{ color: "blue" }}
                      onClick={() => Router.push("/premium")}
                      align="center"
                    >
                      Click here to become prime member
                    </Typography>
                  )}
                </div>
              </Paper>
            </Grid>
            <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
              <Paper className={classes.container}>
                <div className={classes.item}>
                  <Typography variant="h6">
                    {locale.myChannels} : {profileInfo.channelCount}
                  </Typography>
                  <Typography variant="h6">
                    {locale.myArticles}: {profileInfo.articleCount}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
              <Paper className={classes.container}>
                <div className={classes.item}>
                  <Typography variant="h6">
                    {locale.earnings}: Rs:
                    {profileInfo.earn ? profileInfo.earn.balance + ".00" : ""}
                  </Typography>
                  <Typography variant="h6">
                    {locale.payment}: Rs:
                    {profileInfo.payment
                      ? profileInfo.payment.balance.toFixed(2)
                      : 0}
                  </Typography>
                  <Typography variant="h6">
                    {locale.points}:
                    {profileInfo.score ? profileInfo.score.totalScore : ""}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TopMenu;
