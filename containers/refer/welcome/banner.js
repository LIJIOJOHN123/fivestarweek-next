import { Paper, Button, Typography } from "@mui/material";
import React from "react";
import Fade from "@mui/material/Fade";
import Router from "next/router";

const BannerConnent = () => {
  return (
    <Paper
      style={{
        color: "white",
        backgroundColor: "black",
        paddingTop: 150,
        paddingBottom: 150,
        marginTop: -20,
      }}
    >
      <Fade in={true} style={{ transitionDelay: true ? "200ms" : "0ms" }}>
        <Typography
          variant="h3"
          align="center"
          style={{
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Refer your friend and earn
        </Typography>
      </Fade>
      <Fade in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            align="center"
            style={{ fontWeight: "bold", marginBottom: 40 }}
            color="primary"
            onClick={() =>
              Router.push(
                "https://www.youtube.com/channel/UCzUPjJqZmmdg-R0J8kF3OEg"
              )
            }
          >
            <Typography style={{ color: "white", fontWeight: 700 }}>
              {" "}
              More info
            </Typography>
          </Button>
        </div>
      </Fade>
    </Paper>
  );
};

export default BannerConnent;
