import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Card from "./SponsoreCard";
import { articleSponsorePublic } from "../../store/actions/user/article";
import CardMobile from "../../components/article/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "9%",
    marginTop: "-30px",
  },
  img: {
    height: 120,
    width: "100%",
    borderRadius: 5,
  },
  subtitle1: {
    fontSize: 14,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },

  marginCard: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  sectionDesktops: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  sectionMobiles: {
    display: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const ArticleRightList = ({ token }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(articleSponsorePublic(20));
  }, []);
  const article = useSelector((state) => state.article);
  const classes = useStyles();
  const view = (
    <Fragment>
      <div className={classes.sectionMobiles}>
        <div style={{ marginLeft: 8, marginTop: 20 }}>
          <Typography align="center" color="primary">
            sponsored articles
          </Typography>
        </div>
      </div>
      <br />
      <Grid container>
        {article.articleSponosoredGuest.slice(0, 6).map((article, index) => (
          <Fragment key={article._id}>
            <Grid item xs={6} sm={6} md={4} lg={6} xl={6}>
              <Fragment>
                <div className={classes.sectionDesktops}>
                  <Card article={article} />
                </div>
                {(index == 0 || index == 1) && (
                  <div className={classes.sectionMobiles}>
                    <CardMobile article={article} />
                  </div>
                )}
              </Fragment>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Fragment>
  );
  return <List className={classes.root}>{view}</List>;
};

export default ArticleRightList;
