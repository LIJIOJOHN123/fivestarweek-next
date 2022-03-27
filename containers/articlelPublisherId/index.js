import React from "react";
import { Fragment } from "react";
import Table from "./Table";
import InfoArticleAd from "./Info";
import { Typography } from "@mui/material";
const ArticlePublisherId = ({ sponsoredArticle }) => {
  return (
    <Fragment>
      <InfoArticleAd sponsoredArticle={sponsoredArticle} />
      <div style={{ marginLeft: 15 }}>
        <Typography color="primary" variant="h6">
          Visitor report{" "}
        </Typography>
        <Table sponsoredArticle={sponsoredArticle} />
      </div>
      <br />
    </Fragment>
  );
};

export default ArticlePublisherId;
