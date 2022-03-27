import React, { Fragment } from "react";
import ArticleDetails from "./Card";
const Article = ({ article }) => {
  return (
    <Fragment>
      <ArticleDetails article={article} />
    </Fragment>
  );
};

export default Article;
