import React from "react";
import { Fragment } from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    height: 280,
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

const InfoArticleAd = ({ sponsoredArticle }) => {
  const classes = useStyle();
  const { title, description, estimate, status, askedViews } =
    sponsoredArticle.articleSponsore;
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <div className={classes.avatar}>
                <img
                  className={classes.large}
                  src={sponsoredArticle.article.image}
                />
              </div>
              <br />
              <Typography align="center">
                {sponsoredArticle.article.title.length > 40
                  ? sponsoredArticle.article.title.slice(0, 40) + "...."
                  : sponsoredArticle.article.title}
              </Typography>
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

              <Grid container></Grid>
              <Grid container>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>viewed :{sponsoredArticle.viewIps}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>
                    auth views :{sponsoredArticle.viewsauth}
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>visited:{sponsoredArticle.visitIp}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>
                    auth visited:{sponsoredArticle.visitAuth}
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>
                    <Typography>required views : {askedViews}</Typography>
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6} sm={6}>
                  <Typography>Estimate:{estimate.toFixed(2)}</Typography>
                </Grid>
                <Typography align="center">
                  status:
                  {(status === 2 && "Pending for approval") ||
                    (status === 3 && "Active") ||
                    (status === 4 && "Rejected") ||
                    (status === 5 && "Paused") ||
                    (status === 1 && "Expired")}
                </Typography>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InfoArticleAd;
