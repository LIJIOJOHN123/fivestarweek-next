import React, { Fragment } from "react";
import Link from "next/link";
import { Grid, Typography, Hidden } from "@mui/material";
import { getCookie } from "../../../utils/auth";
import { useSelector } from "react-redux";
import SimpleBottomNavigation from "./BottomNavigation";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  container: { color: "#FFFFFF", background: "#303030" },
  content: {
    padding: 40,
    marginTop: 40,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkbottom: {
    color: "red",
    fontWeight: "bold",
  },
}));

const Footer = () => {
  const classes = useStyle();
  const token = getCookie("token");
  const user = useSelector((state) => state.auth);
  const locale = useSelector((state) => state.locale);

  return (
    <Fragment>
      <Hidden only={["sm", "xs"]}>
        <Grid className={classes.container} container>
          {/*  Fist column */}

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={2}
            className={classes.content}
          >
            <div>
              <Typography variant="h6">{locale.aboutus}</Typography>
              <br />
              <Link href="/about/aboutus">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.company}</a>
                  </Typography>
                </a>
              </Link>
              <Link href="/about/career">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.career}</a>
                  </Typography>
                </a>
              </Link>
              <Link href="/about/tc">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.termsAndCondition}</a>
                  </Typography>
                </a>
              </Link>
              <Link href="/about/pn">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.privacyNotice}</a>
                  </Typography>
                </a>
              </Link>
              <Link href="/refer/welcome">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.referandearn}</a>
                  </Typography>
                </a>
              </Link>
            </div>
          </Grid>

          {/*  Second column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={2}
            className={classes.content}
          >
            <div>
              <Typography variant="h6">{locale.products}</Typography>
              <br />
              <Link href="/publisher">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.advertisement}</a>
                  </Typography>
                </a>
              </Link>
              {token ? (
                <Link href={`/premium?refer=${user.user && user.user.userId}`}>
                  <a className={classes.link}>
                    <Typography>
                      <a className={classes.link}>
                        {locale.fivestarweekPremium}
                      </a>
                    </Typography>
                  </a>
                </Link>
              ) : (
                <Link href="/premium">
                  <a className={classes.link}>
                    <Typography>
                      <a className={classes.link}>
                        {locale.fivestarweekPremium}
                      </a>
                    </Typography>
                  </a>
                </Link>
              )}

              <Link href="/workfromhome">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.workfromhome}</a>
                  </Typography>
                </a>
              </Link>
              <br />
            </div>
          </Grid>
          <Grid item md={3} lg={3} xl={2} className={classes.content}>
            <Typography variant="h6">{locale.address}</Typography>
            <br />
            <Typography>{locale.firstAddress}</Typography>
            <Typography>{locale.secondAddress}</Typography>
            <Typography>{locale.city}</Typography>
            <Typography>{locale.pin}</Typography>
            <Typography>Phone: +91 8971988251</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={2}
            className={classes.content}
          >
            <div>
              <Typography variant="h6">{locale.reachUs}</Typography>
              <br />
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UCzUPjJqZmmdg-R0J8kF3OEg"
              >
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.youtube}</a>
                  </Typography>
                </a>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/Fivestarweek-108686391637019"
              >
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.facebook}</a>
                  </Typography>
                </a>
              </Link>

              <Link href="/contactus">
                <a className={classes.link}>
                  <Typography>
                    <a className={classes.link}>{locale.contactUs}</a>
                  </Typography>
                </a>
              </Link>
              <br />
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            backgroundColor: "#303030",
            paddingLeft: 20,
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=fivestarweek.social"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
              width="240"
            />
          </a>
        </div>
        <div className={classes.container}>
          <Typography align="center" className={classes.padding}>
            @ FiveStarWeek 2022
          </Typography>
        </div>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <SimpleBottomNavigation />
      </Hidden>
    </Fragment>
  );
};

export default Footer;
