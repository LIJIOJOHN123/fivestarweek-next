import React, { Fragment } from "react";
import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "./Card";

const useStyle = makeStyles((theme) => ({
  grow: {
    Grow: 1,
    marginLeft: -20,
    marginRight: -20,
  },
  flex: {
    display: "flex",
    width: "35%",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
const List = ({ channels }) => {
  const classes = useStyle();
  let data = channels ? channels : [];

  return (
    <div>
      <Fragment>
        <br />
        <br />
        <Grid container>
          {data.map((channel) => (
            <Fragment key={channel._id}>
              <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                <Card channelOne={channel} />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Fragment>
    </div>
  );
};

export default List;
