import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import DeleteConfirmation from "./channel/Delete";
import ArticleDelete from "./article/Delete";

const useStyles = makeStyles({
  paper: {
    height: 200,
    padding: 20,
    margin: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  position: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
const Card = () => {
  const classes = useStyles();
  const sponsor = useSelector((state) => state.sponsor);
  return (
    <Fragment>
      {sponsor.channelSponsore.length > 0 && (
        <Typography variant="h6" align="center" color="primary">
          Channel sponsored
        </Typography>
      )}
      <Grid container>
        {sponsor.channelSponsore.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <Paper className={classes.paper}>
                <Link href={`/pubchannel/${item._id}`}>
                  <a style={{ textDecoration: "none", color: "black" }}>
                    <Typography align="center" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography align="center">{item.description}</Typography>
                    <Typography align="center">
                      status:
                      {(item.status === 2 && "pending for approval") ||
                        (item.status === 3 && "in progress") ||
                        (item.status === 4 && "rejected") ||
                        (item.status === 5 && "paused") ||
                        (item.status === 1 && "expired")}
                    </Typography>
                  </a>
                </Link>
                <br />
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <Button
                    onClick={() => Router.push(`/pubchannel/${item._id}`)}
                  >
                    View
                  </Button>
                  <DeleteConfirmation id={item._id} />
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {sponsor.articleSponsore.length > 0 && (
        <Typography variant="h6" align="center" color="primary">
          Article sponsored
        </Typography>
      )}
      <Grid container>
        {sponsor.articleSponsore.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <Paper className={classes.paper}>
                <Link href={`/pubarticle/${item._id}`}>
                  <a style={{ textDecoration: "none", color: "black" }}>
                    <Typography align="center" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography align="center">{item.description}</Typography>
                    <Typography align="center">
                      status:
                      {(item.status === 2 && "pending for approval") ||
                        (item.status === 3 && "in progress") ||
                        (item.status === 4 && "rejected") ||
                        (item.status === 5 && "paused") ||
                        (item.status === 1 && "expired")}
                    </Typography>
                  </a>
                </Link>
                <br />
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <Button
                    onClick={() => Router.push(`/pubarticle/${item._id}`)}
                  >
                    View
                  </Button>
                  <ArticleDelete id={item._id} />
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Card;
