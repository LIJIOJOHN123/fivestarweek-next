import React, { Fragment } from "react";
import { Grid, Typography, Paper, Fade, Hidden } from "@mui/material";
import { useSelector } from "react-redux";

const LeftSide = () => {
  let locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      <Hidden smDown>
        <Hidden xsDown>
          <Grid item lg={6} md={6}>
            <Paper
              style={{
                marginTop: -10,
                backgroundColor: "#43A6C6",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "790px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Fade
                  in={true}
                  style={{
                    transitionDelay: true ? "500ms" : "1000ms",
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
            </Paper>
          </Grid>
        </Hidden>
      </Hidden>
    </Fragment>
  );
};

export default LeftSide;
