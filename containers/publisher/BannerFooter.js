import React, { Fragment } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { Grow, Paper, Button, Typography, Grid, Box } from "@mui/material";

const BannerFooter = () => {
  return (
    <Paper
      style={{
        color: "#2c3e50",
        backgroundColor: "#F0F8FF",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Grow in={true}>
        <Fragment>
          <Typography
            variant="h5"
            align="center"
            style={{
              fontWeight: "700",
              marginBottom: 20,
              fontFamily: "Inter, sans-serif",
              fontSize: 25,
            }}
          >
            We are reimagining renting to help you achieve your dreams
          </Typography>
          <Typography
            align="center"
            style={{
              marginBottom: 40,
              marginLeft: 20,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            Our mission is to help you grow your business, meet and connect with
            people who share your passions. We help you fulfill your best
            potential through an engaging lifestyle experience.
          </Typography>
        </Fragment>
      </Grow>
      <Grow in={true}>
        <Box>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ padding: 20 }}
            >
              {" "}
              <div
                style={{ justifyContent: "center", display: "flex", flex: 1 }}
              >
                <AccessAlarmsIcon
                  size="large"
                  style={{ fontSize: 50 }}
                  align="center"
                  color="primary"
                />
              </div>
              <Typography
                align="center"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Coworking communities
              </Typography>
              <Typography align="center">
                Connect in spaces designed to bring incredible people together.
                Learn with them and take your project to new heights.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ padding: 20 }}
            >
              <div
                style={{ justifyContent: "center", display: "flex", flex: 1 }}
              >
                <AccessAlarmsIcon
                  style={{ fontSize: 50 }}
                  size="large"
                  align="center"
                  color="primary"
                />
              </div>
              <Typography
                align="center"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Coworking communities
              </Typography>
              <Typography align="center">
                Connect in spaces designed to bring incredible people together.
                Learn with them and take your project to new heights.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ padding: 20 }}
            >
              {" "}
              <div
                style={{ justifyContent: "center", display: "flex", flex: 1 }}
              >
                <AccessAlarmsIcon
                  style={{ fontSize: 50 }}
                  size="large"
                  align="center"
                  color="primary"
                />
              </div>
              <Typography
                align="center"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Coworking communities
              </Typography>
              <Typography align="center">
                Connect in spaces designed to bring incredible people together.
                Learn with them and take your project to new heights.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ padding: 20 }}
            >
              {" "}
              <div
                style={{ justifyContent: "center", display: "flex", flex: 1 }}
              >
                <AccessAlarmsIcon
                  style={{ fontSize: 50 }}
                  size="large"
                  align="center"
                  color="primary"
                />
              </div>
              <Typography
                align="center"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Coworking communities
              </Typography>
              <Typography align="center">
                Connect in spaces designed to bring incredible people together.
                Learn with them and take your project to new heights.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grow>
    </Paper>
  );
};

export default BannerFooter;
