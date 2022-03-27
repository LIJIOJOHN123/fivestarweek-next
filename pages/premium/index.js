import React from "react";
import Head from "next/head";
import { Grid, Typography, Paper, makeStyles, Button } from "@mui/material";
import PremiumForm from "../../containers/premium/Form";

const useStyles = makeStyles({
  container: {
    height: "100%", // So that grids 1 & 4 go all the way down
    minHeight: 150, // Give minimum height to a div
    border: "1px solid black",
    fontSize: 30,
    textAlign: "center",
  },
  containerTall: {
    minHeight: 250, // This div has higher minimum height
  },
});

const PremerPage = () => {
  const head = () => (
    <Head>
      <title> {process.env.APP_NAME} </title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="index,archive,follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=yes"
      />
      <meta
        property="image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        property="og:image"
        content="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/1.png"
      />
      <meta
        name="description"
        content="Want to access the additional features or services after creating the account? Upgrade your account and avail the benefits. Visit the website to know about the packages."
      />
      <meta
        name="keywords"
        content="premium account, all premium accounts, account packages, premium packages"
      />
      <meta
        property="og:tags"
        content="premium account, all premium accounts, account packages, premium packages"
      />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        property="og:title"
        content="Get Premium Account - Five Star Week"
      />
      <meta
        name="twitter:title"
        content="Get Premium Account - Five Star Week"
      />
      <meta name="title" content="Get Premium Account - Five Star Week" />
      <meta
        property="og:description"
        content="Want to access the additional features or services after creating the account? Upgrade your account and avail the benefits. Visit the website to know about the packages."
      />
      <meta
        name="twitter:description"
        content="Want to access the additional features or services after creating the account? Upgrade your account and avail the benefits. Visit the website to know about the packages."
      />
      <meta property="og:type" content="article" />
    </Head>
  );
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  return (
    <div>
      <React.Fragment>
        <h1 style={{ fontSize: 0 }}>Get Premium Account - Five Star Week </h1>
        <p style={{ fontSize: 0 }}>
          Want to access the additional features or services after creating the
          account? Upgrade your account and avail the benefits. Visit the
          website to know about the packages.
        </p>
        {head()}
        <Paper
          style={{
            height: 1600,
            backgroundColor: "black",
            marginTop: -10,
            paddingBottom: 30,
          }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold", paddingTop: 60 }}
            align="center"
            variant="h4"
          >
            Become premier member and part of Fivestarweek family.
          </Typography>
          <Typography
            style={{ color: "white", fontWeight: "bold", paddingTop: 20 }}
            align="center"
          >
            Annual subscription fee
          </Typography>
          <Grid
            container
            direction="row"
            spacing={2}
            style={{ paddingBottom: 40, paddingTop: 40 }}
          >
            <Grid item md={1} lg={2} xl={2}></Grid>
            <Grid item xs={5} sm={4} md={4} lg={3} xl={2}>
              <Typography>.</Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Points
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Channel verification
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Profile verifaction
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Revenue sharing
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                User visibility
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Typography
                style={{
                  color: "white",

                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Silver
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: 50,
                  marginBottom: 50,
                  fontSize: 18,
                }}
              >
                350
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                Fast
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                Fast
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                60%
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                high
              </Typography>{" "}
              <Typography
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
                onClick={() => {
                  setOpen(true);
                  setAmount(299);
                }}
              >
                Rs:299
              </Typography>
              {/* <Typography
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
                onClick={() => {
                  setOpen(true);
                  setAmount(299);
                }}
              >
                Pay now
              </Typography> */}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
              <Typography
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Gold
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                1000
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                auto
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                auto
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                70%
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                high
              </Typography>{" "}
              <Typography
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
                onClick={() => {
                  setOpen(true);
                  setAmount(499);
                }}
              >
                Rs:499
              </Typography>
              {/* <Typography
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setOpen(true);
                  setAmount(499);
                }}
              >
                Pay now
              </Typography> */}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={1}>
              <Typography
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Diamond
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                2500
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                auto
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                auto
              </Typography>{" "}
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                80%
              </Typography>
              <Typography
                style={{ color: "white", marginTop: 50, marginBottom: 50 }}
              >
                high
              </Typography>{" "}
              <Typography
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
                onClick={() => {
                  setOpen(true);
                  setAmount(999);
                }}
              >
                Rs:999
              </Typography>
              {/* <Typography
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
                onClick={() => {
                  setOpen(true);
                  setAmount(999);
                }}
              >
                Pay now
              </Typography> */}
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4} xl={2}></Grid>
            <Grid xs={12} sm={12} md={4} lg={4} xl={2}>
              <Typography
                style={{ color: "white" }}
                variant="h6"
                align="center"
              >
                Scan and pay
              </Typography>

              <br />
              <Typography style={{ color: "white" }} align="center">
                NB:you can pay us Google pay, Paytm or UPI. Number is
                9108167660.
              </Typography>

              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/payment.jpeg"
                  width="100%"
                />
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* {open && <PremiumForm amount={amount} />} */}
      </React.Fragment>
    </div>
  );
};
export default PremerPage;
