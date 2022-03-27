import React from "react";
import { Fragment } from "react";
import { Grid, Paper, Avatar, makeStyles, Typography } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
  },

  large: {
    width: "100%",
    borderRadius: 10,
  },
  qualification: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ArticleInfo = ({ article }) => {
  const classes = useStyle();
  const { title, description, image, view, viewIP, visit, visitIP } = article;
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <div className={classes.avatar}>
                <img className={classes.large} src={image} />
              </div>
              <br />
              <Typography align="center">{title}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={8} lg={8} md={8} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                {title}
              </Typography>
              <Typography align="center">{description}</Typography>
              <br />
              <Grid container>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Views :{viewIP.length}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Auth Views :{view.length}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Visits:{visitIP.length}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Auth visits:{visit.length}</Typography>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ArticleInfo;
