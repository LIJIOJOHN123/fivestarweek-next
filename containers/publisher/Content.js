import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

import Card from "./Card";

const ContentSection = () => {
  return (
    <div style={{ marginLeft: 20, marginRight: 20 }}>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <Typography align="center" variant="h4" color="primary">
          Guide
        </Typography>
      </div>
      <Grid container>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContentSection;
