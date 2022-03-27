import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import Term from "./Term";
import Tabs from "./Tabs";
import { useDispatch } from "react-redux";
import { postSearchResult } from "../../store/actions/user/search";
import PostSearchTab from "./PostTab";

const useStyles = makeStyles({
  list: {
    marginLeft: "10px",
    marginTop: "10px",
    marginRight: "15px",
  },

  search: {
    color: "white",
  },
  textBox: {
    marginTop: 40,
  },
});

export default function TemporaryDrawer({ preresult }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState({
    search: "",
  });

  const { search } = query;
  const handleChange = (search) => (e) => {
    setQuery({ ...query, [search]: e.target.value });
  };

  const [keyword, setKeyword] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postSearchResult(search, 24, 24, 18, 18));
    setQuery({ search });
    setKeyword(search);
    setOpen(true);
  };

  const views = <Tabs preresult={preresult} search={keyword} />;
  const postResults = <PostSearchTab search={keyword} />;

  return (
    <div>
      <Fragment>
        <div className={clsx(classes.list)} role="presentation">
          <div className={classes.textBox}>
            <Term
              handleChange={handleChange}
              search={search}
              handleSubmit={handleSubmit}
            />
          </div>
          {open ? postResults : views}
        </div>
      </Fragment>
    </div>
  );
}
