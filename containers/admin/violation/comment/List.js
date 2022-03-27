import React, { Fragment } from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { useSelector } from "react-redux";

const ViolationList = () => {
  const list = useSelector((state) => state.user.commentViolation);
  return (
    <Fragment>
      <Grid container>
        {list.map((item) => (
          <Grid item lg={4} key={item._id}>
            <Paper
              style={{
                padding: 10,
                margin: 10,
                height: 200,
                overflowY: "scroll",
              }}
            >
              <Typography>{item._id}</Typography>
              {item.violation.map((mess) => (
                <Typography key={mess._id}>{mess.reason}</Typography>
              ))}
              <div>
                <Button>Block</Button>
                <Button>Remove</Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default ViolationList;
