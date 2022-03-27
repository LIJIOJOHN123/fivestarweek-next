import { Paper, Grow, Typography, Button } from "@mui/material";
import React, { Fragment } from "react";
import Router from "next/router";

const ButtonSection = () => {
  return (
    <Fragment>
      <Paper
        style={{
          color: "#2c3e50",
          backgroundColor: "gray",
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
              Our mission is to help you grow your business, meet and connect
              with people who share your passions. We help you fulfill your best
              potential through an engaging lifestyle experience.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={() => Router.push("/publisher/list")}>
                Let us start
              </Button>
              <Button onClick={() => Router.push("/publisher/mychannels")}>
                Create new add
              </Button>
            </div>
          </Fragment>
        </Grow>
      </Paper>
    </Fragment>
  );
};

export default ButtonSection;
