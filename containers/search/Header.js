import React from "react";
import { Grid, makeStyles, Typography } from "@mui/material";
import { Fragment } from "react";
const useStyle = makeStyles({
  boundary: {
    marginLeft: "10px",
    marginTop: "10px",
    marginRight: "15px",
  },
  image: {
    width: "90%",
  },
  words: {
    marginTop: "40px",
  },
  searching: {
    marginBottom: "-20px",
    marginTop: "10px",
    display: "block",
  },
});
const data = [
  { image: "https://www.mxplayer.in/images/search/shows.png", head: "All" },
  {
    image: "https://www.mxplayer.in/images/search/shorts.png",
    head: "Channel",
  },
  {
    image: "https://www.mxplayer.in/images/search/livetv.png",
    head: "Article",
  },
  {
    image: "https://www.mxplayer.in/images/search/movies.png",
    head: "Comment",
  },
  {
    image: "https://www.mxplayer.in/images/search/shows.png",
    head: "Publisher",
  },
  {
    image: "https://www.mxplayer.in/images/search/shows.png",
    head: "Publisher",
  },
];
const searchWord = [
  "congress",
  "bjp",
  "india",
  "money",
  "we",
  "runs",
  "data",
  "we",
  "runs",
  "congress",
  "bjp",
  "india",
  "money",
  "we",
  "runs",
  "data",
  "we",
  "adkl",
  "we",
  "dakl",
];
const ImageSearchBar = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container className={classes.boundary}>
        {data.map((item) => {
          return (
            <Grid item lg={2} sm={6} xs={6} md={3} xl={3} key={item.head}>
              <img src={item.image} className={classes.image} />
              <Typography align="center">{item.head}</Typography>
            </Grid>
          );
        })}

        <div>
          <Typography className={classes.searching} variant="h6" gutterBottom>
            Trending Keywords
          </Typography>
        </div>
      </Grid>
      <Grid container className={classes.boundary}>
        {searchWord.map((item, index) => {
          return (
            <Grid item lg={2} sm={6} xs={6} md={4} xl={3} key={item.searchWord}>
              <Typography align="left" className={classes.words}>
                {item}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default ImageSearchBar;
