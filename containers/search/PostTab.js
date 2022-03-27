import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography, Button } from "@mui/material";
import ArticleList from "./Articles/Lists";
import VideoLists from "./Videos/Lists";
import ChannelLists from "./Channels/Lists";
import CommentLists from "./Comments/Lists";
import { useSelector } from "react-redux";
import Loading from "../../components/Theme/Loading";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 1000,
    color: "black",
  },
  button: {
    marginLeft: "10px",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function PostSearchTab({ search }) {
  const result = useSelector((state) => state.search);
  const locale = useSelector((state) => state.locale);
  const searchQuery = result.postresult;
  const article = searchQuery.article ? searchQuery.article : [];
  const channel = searchQuery.channel ? searchQuery.channel : [];
  const video = searchQuery.video ? searchQuery.video : [];
  const comment = searchQuery.comment ? searchQuery.comment : [];
  const articlesCount = searchQuery.articlesCount
    ? searchQuery.articlesCount
    : 0;
  const videosCount = searchQuery.videosCount ? searchQuery.videosCount : 0;
  const channelsCount = searchQuery.channelsCount
    ? searchQuery.channelsCount
    : 0;
  const commentsCount = searchQuery.commentsCount
    ? searchQuery.commentsCount
    : 0;
  const articleLimit = result.articlelimit;

  let classes = useStyles();
  const [value, setValue] = React.useState(0);
  // handleValue(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      {result.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            scrollButtons="auto"
            variant="scrollable"
          >
            <Tab className={classes.bold} label={locale.articles} />
            <Tab className={classes.bold} label={locale.videos} />
            <Tab className={classes.bold} label={locale.channels} />
            <Tab className={classes.bold} label={locale.comments} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ArticleList
              articles={article}
              articlesCount={articlesCount}
              search={search}
              articleLimit={articleLimit}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <VideoLists
              articles={video}
              articlesCount={videosCount}
              search={search}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChannelLists
              articles={channel}
              articlesCount={channelsCount}
              search={search}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <CommentLists
              articles={comment}
              articlesCount={commentsCount}
              search={search}
            />
          </TabPanel>
        </Fragment>
      )}
    </Fragment>
  );
}
