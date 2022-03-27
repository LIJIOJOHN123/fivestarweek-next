import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Grid, Typography } from "@mui/material";
import Comments from "../../Users/11 - Comments/index";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 1000,
    color: "black",
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

const SubHead = ({ comments, links }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.bold} label="Comments" />
        <Tab className={classes.bold} label="Related content" />
        <Tab className={classes.bold} label="Related discussion" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Comments comments={comments} links={links} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        ldafjklajfda
      </TabPanel>
      <TabPanel value={value} index={3}>
        dalfakl
      </TabPanel>
    </Fragment>
  );
};

export default SubHead;
