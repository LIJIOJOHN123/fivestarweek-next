import { Paper, Button, Typography, makeStyles, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Fade from "@mui/material/Fade";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      height: 480,
      width: "100%",
      borderRadius: 10,
      display: "flex",
    },
  },
  sectionMobile: {
    height: 250,
    width: "100%",
    borderRadius: 10,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const BannerConnent = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div>
        <Paper
          style={{
            color: "white",
            backgroundColor: "black",
            paddingBottom: 40,
            paddingTop: 50,
            marginTop: -10,
          }}
        >
          <Fade in={true} style={{ transitionDelay: true ? "200ms" : "0ms" }}>
            <Grid container>
              <Grid item lg={2}></Grid>
              <Grid item lg={8} sm={12} xs={12}>
                <Fragment className={classes.toolbar}>
                  <ReactPlayer
                    className="react-player"
                    controls
                    url={process.env.youtube}
                    playing={false}
                    width="100%"
                  />
                </Fragment>
              </Grid>
            </Grid>
          </Fade>
        </Paper>
      </div>
      <div></div>
    </Fragment>
  );
};

export default BannerConnent;
