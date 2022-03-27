import { Paper, Button, Typography, Fade } from "@mui/material";
import React, { Fragment } from "react";
import Router from "next/router";
import { getCookie } from "../../utils/auth";

const BannerConnent = () => {
  let token = getCookie("token");
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
      <Typography
        variant="h3"
        align="center"
        style={{
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        Publish your digital advertisement and get more customers
      </Typography>
      <Fragment>
        <Typography
          variant="h5"
          align="center"
          style={{ fontWeight: "bold", marginBottom: 40 }}
        >
          place to publish your digital advertisement
        </Typography>
        <div style={{ justifyContent: "center", display: "flex" }}>
          {token ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => Router.push("/publisher/list")}
            >
              Let us get started
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => Router.push("/")}
            >
              Let us get started
            </Button>
          )}
        </div>
      </Fragment>
    </Paper>
  );
};

export default BannerConnent;
