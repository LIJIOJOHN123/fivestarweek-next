import React from "react";
import { Fragment } from "react";
import Table from "./Table";
import InfoArticleAd from "./Info";
import { Typography } from "@mui/material";
const ArticleAnalysDetails = ({ analytics }) => {
  return (
    <Fragment>
      <InfoArticleAd article={analytics.article} />
      <div style={{ marginLeft: 15 }}>
        <Typography color="primary" variant="h6" style={{ marginBottom: 20 }}>
          Viewer report
        </Typography>
        <Table viewIp={analytics.viewIp} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          Auth viewers report
        </Typography>
        <Table viewIp={analytics.viewAuth} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          Visitor report
        </Typography>
        <Table viewIp={analytics.visitIps} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          Auth vistor reeport
        </Typography>
        <Table viewIp={analytics.authVisit} />
      </div>
      <br />
    </Fragment>
  );
};

export default ArticleAnalysDetails;
