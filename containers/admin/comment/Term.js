import React from "react";
import TextField from "@mui/material/TextField";
import { Button, makeStyles } from "@mui/material";
import Router from "next/router";

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
import { useDispatch } from "react-redux";
import { commentSearchList } from "../../../store/actions/admin/user";
const Term = () => {
  const [query, setQuery] = React.useState({
    search: "",
  });
  const { search } = query;

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(commentSearchList(query.search));
  };
  const handleChange = (search) => (e) => {
    setQuery({ ...query, [search]: e.target.value });
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <TextField
          label="Search"
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
          Search
        </Button>
      </form>
    </Fragment>
  );
};

export default Term;
