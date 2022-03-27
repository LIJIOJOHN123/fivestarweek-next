import { Paper, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";

const BannerFooter = () => {
  return (
    <Paper
      style={{
        color: "#2c3e50",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        style={{ fontWeight: "bold", marginBottom: 20, fontFamily: "Lato" }}
      >
        Digital employment and make work from homoe Digital employment and make
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
        Access a global, on-demand, 24x7 workforce Access a global, on-demand,
        24x7 workforce Access a global, on-demand, 24x7 workforce Access a
        global, on-demand, 24x7 workforce
      </Typography>
    </Paper>
  );
};

export default BannerFooter;
