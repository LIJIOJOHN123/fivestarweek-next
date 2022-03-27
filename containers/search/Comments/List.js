import React, { Fragment } from "react";
import { Grid, Button, Typography, makeStyles } from "@mui/material";
import CommentCard from "./Card";

const CommentList = ({ comments }) => {
  let data = comments ? comments : [];

  const view = (
    <div>
      <Grid container>
        {data.map((comment) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={6} key={comment._id}>
            <CommentCard commentOne={comment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
  return <Fragment>{view}</Fragment>;
};
export default CommentList;
