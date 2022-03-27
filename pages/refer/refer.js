import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import Link from "next/link";
import { getCookie, parseCookies } from "../../utils/auth";
import { referalLink } from "../../action/refer";
import Table from "../../containers/refer/Table";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  link: {
    textDecoration: "none",
  },
});
const ReferandEarnPage = ({ refer }) => {
  const classes = useStyle();
  const token = getCookie("token");
  return (
    <Fragment>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Typography variant="h4" align="center">
          Users list
        </Typography>
        <Typography align="center">Users who are refered by you</Typography>
        <br />

        {refer && token ? (
          <Fragment>
            <Table user={refer.users ? refer.users : []} />
          </Fragment>
        ) : (
          []
        )}
      </div>
    </Fragment>
  );
};
ReferandEarnPage.getInitialProps = async ({ req }) => {
  let token = parseCookies(req).token;
  const refer = await referalLink(token);
  return { refer };
};
export default ReferandEarnPage;
