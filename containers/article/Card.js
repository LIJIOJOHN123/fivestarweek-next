import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Avatar, Typography, Chip } from "@mui/material";
import Link from "next/link";
import Share from "./Share";
import Comments from "../comments";
import moment from "moment";
import ArticleRightList from "./List";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import ReactPlayer from "react-player";
import Loading from "../../components/Theme/Loading";
import { getCookie } from "../../utils/auth";
// import Violation from "../15 violation";
import RelatedArticle from "./relatedDiscussion/List";
import ChannelArticle from "./channelArticle/List";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { articleLike, articleUnlike } from "../../store/actions/user/article";
const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },

  title: {
    color: "black",
  },
  sectionDesktoptag: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  },
  sectionMobiletag: {
    display: "display",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      height: 480,
      width: "100%",
      borderRadius: 10,
      display: "flex",
    },
  },
  sectionMobile: {
    height: 250,
    width: "100%",
    borderRadius: 10,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sectionDesktop1: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      height: 450,
      width: "100%",
      borderRadius: 10,
      display: "flex",
    },
  },
  sectionMobile1: {
    height: 250,
    borderRadius: 20,
    marginLeft: -20,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sectionDesktopButton: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      display: "flex",
    },
  },
  sectionMobileButton: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  channel: {
    padding: 10,
    backgroundColor: "black",
    marginRight: 20,
    color: "white",
    borderRadius: "7px",
    fontWeight: "bold",
  },
  display: {
    display: "flex",
    marginBottom: 10,
  },

  down: {
    display: "flex",
  },
  chip: {
    fontSize: "13px",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    marginLeft: 20,
    color: "black",
    backgroundColor: "#e2e2e2",
  },
  donation: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  subhead: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
}));

const ArticleDetails = ({ article }) => {
  const arts = article.article ? article.article : {};
  const classes = useStyles();
  const router = useRouter();
  const { posts } = router.query;
  const {
    description,
    title,
    _id,
    source,
    image,
    keywords,
    likes,
    viewIP,
    type,
    link,
    createdAt,
    channel,
    visitIP,
    comments,
  } = arts;
  const comment = useSelector((state) => state.comment);
  const itemLimit = (item) => {
    const limit = item.length > 25 ? item.slice(0, 25) : item;
    return limit;
  };
  let links;
  if (source == "www.youtube.com") {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

    var match = link.match(regExp);
    links = `https://www.youtube.com/watch?v=${match[7]}`;
  } else {
    links = link;
  }
  const token = getCookie("token");
  let user = useSelector((state) => state.auth);
  let likeVerfication = [];
  if (user.user) {
    likeVerfication = likes.filter((like) => like.user === user.user._id);
  }
  const dispatch = useDispatch();

  const handleLike = async () => {
    await dispatch(articleLike(_id));
    await Router.replace(Router.asPath);
  };
  const handleUnlike = async () => {
    await dispatch(articleUnlike(_id));
    await Router.replace(Router.asPath);
  };
  const [play, setPlay] = React.useState(false);
  const desktopView = (
    <Fragment>
      <div className={classes.display}>
        <Link href={`/channels/${channel._id}`}>
          <a className={classes.link}>
            <div
              className={classes.channel}
            >{`@${channel.channelName} ${channel.follows.length} followers`}</div>
          </a>
        </Link>
        {keywords
          ? keywords
              .toString()
              .split(",")
              .map(
                (item, index) =>
                  index < 4 &&
                  item !== "" && (
                    <Chip className={classes.chip} label={itemLimit(item)} />
                  )
              )
          : []}
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <div className={classes.items}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {type === "Article" ? (
                <Fragment>
                  <div>
                    <img
                      className={classes.sectionDesktop}
                      alt={image}
                      src={image}
                    />
                    <img
                      className={classes.sectionMobile}
                      alt={image}
                      src={image}
                    />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className={classes.sectionDesktop}>
                    <ReactPlayer
                      className="react-player"
                      controls
                      url={links}
                      height="450px"
                      width="100%"
                      playing={false}
                    />
                  </div>
                </Fragment>
              )}
            </a>
            <br />
            <Typography variant="h5" gutterBottom className={classes.title}>
              {title}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Fragment>
                <Typography className={classes.subhead}>
                  {" "}
                  {moment(createdAt).fromNow("seconds")} ago
                </Typography>
                <Typography className={classes.subhead}>
                  {viewIP ? viewIP.length + " views" : 0 + "views"}
                </Typography>
                <Typography className={classes.subhead}>
                  {likes ? likes.length + " likes" : 0 + " likes"}
                </Typography>
                <Typography className={classes.subhead}>
                  {visitIP.length
                    ? visitIP.length + " visitors"
                    : 0 + " vistors"}
                </Typography>
                <Typography className={classes.subhead}>
                  {comments ? comments.length + " comments" : 0 + " comments"}
                </Typography>
              </Fragment>
              <Fragment>
                {token ? (
                  <Fragment>
                    <Share id={_id} />
                    {likeVerfication[0] ? (
                      <Fragment>
                        <Typography
                          onClick={(e) => handleUnlike(e)}
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "gray",
                          }}
                        >
                          <ThumbDownAltIcon
                            style={{ color: "gray", marginRight: 10 }}
                          />{" "}
                        </Typography>
                      </Fragment>
                    ) : (
                      <Typography
                        onClick={() => handleLike()}
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        {" "}
                        <ThumbUpIcon
                          style={{ color: "gray", marginRight: 10 }}
                        />{" "}
                      </Typography>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <Share id={_id} />
                    <Typography
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      <Link href="/login">
                        <ThumbUpIcon
                          style={{ color: "gray", marginRight: 10 }}
                        />
                      </Link>
                    </Typography>
                  </Fragment>
                )}
              </Fragment>
            </div>

            <br />
            <Typography variant="body2" gutterBottom>
              {description}
            </Typography>

            <div className={classes.down}>
              {source}
              {/* {token && <Violation id={posts} source="article" />} */}
            </div>
            <Grid item></Grid>
            <br />
            <Grid container></Grid>
          </div>

          <div>
            <Typography variant="h6" align="center">
              Comments
            </Typography>
          </div>
        </Grid>
        <ArticleRightList token={token} />
      </Grid>
    </Fragment>
  );
  const mobileView = (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <div className={classes.items}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {type === "Article" ? (
                <Fragment>
                  <div>
                    <img
                      className={classes.sectionDesktop}
                      alt={image}
                      src={image}
                    />
                    <img
                      className={classes.sectionMobile}
                      alt={image}
                      src={image}
                    />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className={classes.sectionDesktop1}>
                    <ReactPlayer
                      className="react-player"
                      controls
                      url={links}
                      onClick={() => setPlay(true)}
                      height="450px"
                      width="100%"
                    />
                  </div>
                  <div className={classes.sectionMobile1}>
                    <ReactPlayer
                      controls
                      className="react-player"
                      url={links}
                      height="250px"
                      width="100%"
                    />
                  </div>
                </Fragment>
              )}
            </a>
            <br />
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              {title}
            </Typography>

            <Link href={`/channels/${channel._id}`}>
              <Fragment>
                <a className={classes.link}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Avatar
                      src={channel.avatar && channel.avatar.image}
                      style={{ marginRight: 20 }}
                    />

                    <div>{`@${channel.channelName}`}</div>
                  </div>
                  <Typography
                    style={{
                      marginLeft: 60,
                      marginTop: -15,
                      color: "gray",
                      marginBottom: 20,
                      fontSize: 15,
                    }}
                  >
                    {channel.channel}
                  </Typography>
                </a>
              </Fragment>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Fragment>
                <Chip
                  className={classes.chip}
                  label={viewIP ? viewIP.length + " views" : 0 + "views"}
                />
                <Chip
                  className={classes.chip}
                  label={likes ? likes.length + " likes" : 0 + " likes"}
                />
                <Chip
                  className={classes.chip}
                  label={
                    comments ? comments.length + " comments" : 0 + " comments"
                  }
                />
              </Fragment>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Fragment>
                {token ? (
                  <Fragment>
                    <Share id={_id} />
                    {likeVerfication[0] ? (
                      <Typography
                        size="large"
                        onClick={(e) => handleUnlike(e)}
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "gray",
                          marginTop: 4,
                        }}
                      >
                        <ThumbDownAltIcon
                          style={{
                            fontWeight: "bold",
                            color: "gray",
                            marginTop: 4,
                          }}
                        />
                      </Typography>
                    ) : (
                      <Typography size="small" color="large">
                        <ThumbUpIcon
                          onClick={() => handleLike()}
                          style={{
                            fontWeight: "bold",
                            color: "gray",
                            marginTop: 4,
                          }}
                        />
                      </Typography>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <Share id={_id} />
                    <Link href="/login">
                      <ThumbUpIcon style={{ color: "gray", marginRight: 10 }} />
                    </Link>
                  </Fragment>
                )}
              </Fragment>
            </div>
            <br />
            {type === "Article" && (
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
            )}
            <div className={classes.down}>
              Posted on : {moment(createdAt).fromNow("seconds")} on {source}
              {/* {token && <Violation id={posts} source="article" />} */}
            </div>
            <Grid item></Grid>
            <br />
            <Grid container></Grid>
          </div>
        </Grid>
        <ArticleRightList token={token} />
      </Grid>
      <Typography variant="h6" align="center">
        Comments
      </Typography>
    </Fragment>
  );
  return (
    <div className={classes.card}>
      <div className={classes.sectionDesktoptag}>{desktopView}</div>
      <div className={classes.sectionMobiletag}>{mobileView}</div>
      <div>{comment.loading ? <Loading /> : <Comments />}</div>

      <RelatedArticle articles={article.relatedDiscussion} />
      <ChannelArticle articles={article.channelArticleList} />
    </div>
  );
};
export default ArticleDetails;
