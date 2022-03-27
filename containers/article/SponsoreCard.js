import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Typography, Grid } from "@mui/material";
import { getCookie } from "../../utils/auth";
import { articleAuthView, articleIPView } from "../../action/visitor";
import axios from "axios";
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
}));
const ArticleRightList = ({ article }) => {
  const classes = useStyles();
  const token = getCookie("token");
  React.useEffect(async () => {
    try {
      const ipdetails = await axios.get("https://extreme-ip-lookup.com/json/");
      const formData = {
        ip: ipdetails.data.query,
        city: ipdetails.data.city,
        country: ipdetails.data.country,
        region: ipdetails.data.region,
      };
      token && _id && (await articleAuthView(_id, token, formData));
    } catch (error) {}
  }, []);
  React.useEffect(async () => {
    try {
      const ipdetails = await axios.get("https://extreme-ip-lookup.com/json/");
      const formData = {
        ip: ipdetails.data.query,
        city: ipdetails.data.city,
        country: ipdetails.data.country,
        region: ipdetails.data.region,
      };
      _id && (await articleIPView(_id, formData));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Fragment>
      <div className={classes.marginCard}>
        <Typography color="primary">sponsored</Typography>
        <Link href={`/article/${article._id}`}>
          <a className={classes.link}>
            <Fragment>
              <img className={classes.img} src={article.image} />
              <div>
                <Typography variant="body2" className={classes.subtitle1}>
                  {article.title.length > 40
                    ? article.title.slice(0, 40) + "....."
                    : article.title}
                </Typography>
              </div>
              <Typography variant="subtitle2" className={classes.subtitle1}>
                {article.source}
              </Typography>
            </Fragment>
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default ArticleRightList;
