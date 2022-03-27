import React from "react";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "block",
    marginLeft: "45%",
    marginRight: "auto",
    overflowY: "hidden" /* Hide vertical scrollbar */,
    overflowX: "hidden" /* Hide horizontal scrollbar */,
  },
}));

export default function Loading() {
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
}
