import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  center: {
    display: "flex",
    minHeight: "500px",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <Stack
      sx={{ color: "grey.500" }}
      spacing={2}
      direction="row"
      className={classes.center}
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Loading;
