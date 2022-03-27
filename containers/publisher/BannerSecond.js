import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  img: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },

  text: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
  overlay: {
    position: "absolute",
    color: "white",
    backgroundColor: "blue",
    padding: 2,
    marginLeft: 3,
    marginTop: 3,
  },
  time: {
    fontSize: "14px",
  },
}));
const BannerSecond = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container>
        <Grid
          item
          lg={6}
          style={{
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <img
            src="https://www.w3schools.com/howto/img_paris.jpg"
            width="50%"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "40%",
            }}
          />
          <Typography
            align="center"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            ldkajflka lkdajflkasj fdlkajlkfdajlfdsklkdsajfalk lk dslkajfdlkaj
            dlkfjd salk lkajfdlka daklfjdal lkadjfalkfd alkfdjalkfjdalk
            lkdsajflkj
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <img
            src="https://www.w3schools.com/howto/img_paris.jpg"
            width="50%"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "40%",
            }}
          />
          <Typography
            align="center"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            ldkajflka lkdajflkasj fdlkajlkfdajlfdsklkdsajfalk lk dslkajfdlkaj
            dlkfjd salk lkajfdlka daklfjdal lkadjfalkfd alkfdjalkfjdalk
            lkdsajflkj
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BannerSecond;
