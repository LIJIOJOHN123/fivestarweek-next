import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import ArticleList from "./Articles/List";
import ChannelList from "./Channels/List";
import CommenList from "./Comments/List";
import VideoList from "./Videos/List";
import { useSelector } from "react-redux";

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

export default function SubHead({ preresult, toggleDrawers }) {
  const videos = preresult ? preresult.videos : [];
  const articles = preresult ? preresult.articles : [];
  const comments = preresult ? preresult.comments : [];
  const channels = preresult ? preresult.channels : [];

  let classes = useStyles();
  const [value, setValue] = React.useState(0);
  // handleValue(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const locale = useSelector((state) => state.locale);
  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab className={classes.bold} label={locale.articles} />
        <Tab className={classes.bold} label={locale.videos} />
        <Tab className={classes.bold} label={locale.channels} />
        <Tab className={classes.bold} label={locale.comments} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ArticleList articles={articles} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VideoList articles={videos} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChannelList channels={channels} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CommenList comments={comments} />
      </TabPanel>
    </Fragment>
  );
}
