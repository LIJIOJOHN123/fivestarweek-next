import React, { Fragment } from "react";
import { Grid, Button } from "@mui/material";
import Card from "./Card";
import { useSelector } from "react-redux";

const List = () => {
  const channels = useSelector((state) => state.user);
  return (
    <div>
      <Fragment>
        <Grid container>
          {channels.sponsorechannellist.map((channel) => (
            <Fragment key={channel._id}>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={2}>
                <Card item={channel} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Fragment>
    </div>
  );
};

export default List;
