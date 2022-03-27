import React, { Fragment } from "react";
import { Grid, Typography, Paper, Fade, Hidden } from "@mui/material";
import { useSelector } from "react-redux";

const LoginLeft = () => {
  let locale = useSelector((state) => state.locale);

  return (
    <Fragment>
      <Hidden smDown>
        <Hidden xsDown>
          <Grid item lg={6} md={6}>
            <Paper
              style={{
                marginTop: -10,
                backgroundColor: "rgb(0, 41, 112)",
                height: "790px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Fade
                  in={true}
                  style={{
                    transitionDelay: true ? "500ms" : "1000ms",
                    marginTop: 50,
                  }}
                >
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {locale.welcome}
                  </Typography>
                </Fade>
              </div>
              <Typography
                align="center"
                style={{ color: "white", marginTop: 10, marginBottom: 40 }}
              >
                {locale.subWelcome}{" "}
              </Typography>
              <img
                src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/like-comment-share.png"
                width="50%"
                height="300px"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
              />
            </Paper>
          </Grid>
        </Hidden>
      </Hidden>
    </Fragment>
  );
};

export default LoginLeft;
