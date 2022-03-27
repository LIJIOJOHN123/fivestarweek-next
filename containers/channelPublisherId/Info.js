import React from "react";
import { Fragment } from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
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

  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  qualification: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const InfoChannelAd = ({ sponsoredChannel }) => {
  const classes = useStyle();
  const { avatar, channel, channelName, follows } = sponsoredChannel.channel;
  const { title, description, estimate, status, askedViews } =
    sponsoredChannel.channelSponsore;
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <div className={classes.avatar}>
                <Avatar className={classes.large} src={avatar.image} />
              </div>
              <Typography align="center" variant="h6">
                {channel}
              </Typography>
              <Typography align="center">{channelName}</Typography>
              <Typography align="center">{follows.length} followers</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={8} lg={8} md={8} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                {title}
              </Typography>
              <Typography align="center">{description}</Typography>
              <br />

              <Grid container>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>viewed :{sponsoredChannel.viewsauth}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>
                    auth views :{sponsoredChannel.viewsauth}
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>visited:{sponsoredChannel.visitIp}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>
                    auth visited:{sponsoredChannel.visitAuth}
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Estimate:{estimate.toFixed(2)}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>required views : {askedViews}</Typography>
                </Grid>
                <Typography align="center">
                  status:
                  {(status === 2 && "Pending for approval") ||
                    (status === 3 && "Active") ||
                    (status === 4 && "Rejected") ||
                    (status === 5 && "Paused") ||
                    (status === 1 && "Expired")}
                </Typography>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InfoChannelAd;
