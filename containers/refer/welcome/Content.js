import React, { Fragment } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ShareDialog from "./../Share";
import { sendEmailInvitation } from "../../../store/actions/user/auth";
import { getCookie } from "./../../../utils/auth";
import Router from "next/router";

const Content = () => {
  const user = useSelector((state) => state.auth);
  const item = user && user.refers ? user.refers[0] : [];
  const refer = user ? user.refer : {};
  const [email, setEmails] = React.useState("");
  const dispatch = useDispatch();
  const token = getCookie("token");
  return (
    <Fragment>
      <Grid container>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <div
            style={{
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <img
              src="https://fivestarweek.s3.ap-south-1.amazonaws.com/public/refer+friend.png"
              width="100%"
              height={200}
              style={{ borderRadius: "10px" }}
            />
          </div>
          {token ? (
            <ShareDialog
              link={`${process.env.DOMAIN}/refer?refer=${
                user.user && user.user.userId
              }`}
            />
          ) : (
            <ShareDialog link={`${process.env.DOMAIN}/refer?refer=undefined`} />
          )}
          <Typography align="center" variant="h6">
            Refer and earn points
          </Typography>
          <br />
          <Typography style={{ marginLeft: 20 }}>
            Refer your friend and earn points
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography align="center" variant="h4">
            Invite your friend through email
          </Typography>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <TextField
              autoFocus
              value={email || ""}
              disabled={!token}
              onChange={(e) => setEmails(e.target.value)}
              id="channel"
              label="Email"
              type="emachannelil"
              margin="normal"
              variant="outlined"
              placeholder="Paste your multiple emails seperated by coma"
              fullWidth
              multiline
              rows={15}
              name="channel"
            />
            {token ? (
              <Button
                onClick={() => {
                  dispatch(sendEmailInvitation(email));
                  setEmails("");
                }}
              >
                Send invitation
              </Button>
            ) : (
              <Button onClick={() => Router.push("/")}>Send invitation</Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Content;
