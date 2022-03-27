import { Typography, Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleCategoryList } from "../../../store/actions/admin/user";
import Link from "next/link";

const ArticleCategory = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(articleCategoryList());
  }, []);
  const articleCategory = useSelector((state) => state.user);
  return (
    <Fragment>
      <Fragment>
        <div style={{ marginLeft: 10 }}>
          <Grid container>
            {articleCategory.articleCategorylist.map((item) => {
              return (
                <Fragment>
                  <Grid lg={3}>
                    <Link href={`/admins/articlecategory/${item._id}`}>
                      <Paper style={{ padding: 10, margin: 10 }}>
                        <Typography variant="h5">{item.language}</Typography>
                      </Paper>
                    </Link>
                  </Grid>
                </Fragment>
              );
            })}
          </Grid>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default ArticleCategory;
