import React, { Fragment } from "react";
import { Button } from "@mui/material";
import Router from "next/router";

const SponsoreManagementMenu = () => {
  return (
    <Fragment>
      <div style={{ marginRight: 20 }}>
        <Button onClick={() => Router.push("/master/sponsore/channel")}>
          Approval pending
        </Button>
        <Button onClick={() => Router.push("/master/sponsore/artlist")}>
          Sponsored Article
        </Button>
        <Button onClick={() => Router.push("/master/sponsore/chanlist")}>
          Sponosored channels
        </Button>
      </div>
    </Fragment>
  );
};

export default SponsoreManagementMenu;
