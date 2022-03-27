import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  drawerPaper: {
    width: "100%",
    marginTop: 20,
  },
  search: {
    color: "white",
  },
  search: {
    marginLeft: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
import { Fragment } from "react";
const Term = ({ handleChange, search, handleSubmit }) => {
  const classes = useStyles();
  const locale = useSelector((state) => state.locale);

  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <TextField
          label={`${locale.search}`}
          variant="outlined"
          onChange={handleChange("search")}
          fullWidth
          value={search}
          color={classes.back}
        />
        <Button
          onClick={handleSubmit}
          align="center"
          color="primary"
          variant="contained"
          className={classes.search}
        >
          {locale.search}
        </Button>
      </form>
    </Fragment>
  );
};

export default Term;
