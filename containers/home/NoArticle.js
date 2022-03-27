import { Typography, Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/article/Card";
import { articleSponsorePublic } from "../../store/actions/user/article";
import { channelSuggestedList } from "../../store/actions/user/channel";
import SponsoredChannels from "./channel/List";
import Loading from "../../components/Theme/Loading";
import { getCookie } from "../../utils/auth";

const NoAarticle = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(articleSponsorePublic(20));
  }, []);
  const article = useSelector((state) => state.article);
  const language = getCookie("language");
  React.useEffect(() => {
    dispatch(channelSuggestedList(12));
  }, [language, dispatch]);
  const channels = useSelector((state) => state.channel);
  return (
    <Fragment>
      {article.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Typography
            align="center"
            variant="h4"
            color="primary"
            style={{ margin: 50, fontWeight: "bold" }}
          >
            Welcome to FiveStarWeek community.
          </Typography>
          <Typography align="center" style={{ margin: 30 }}>
            No items or less items found. Please follow channels to get more
            items.
          </Typography>
          {channels.channelSuggestion.length > 1 && (
            <Typography
              style={{
                margin: 10,
                color: "gray",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Suggested channels
            </Typography>
          )}
          <SponsoredChannels channels={channels.channelSuggestion} />
          {article.articleSponosoredGuest.length > 1 && (
            <Typography
              style={{
                marginLeft: 10,
                color: "gray",
                fontSize: 16,
                fontWeight: "bold",
                margin: 10,
              }}
            >
              Sponosred articles
            </Typography>
          )}
          <Grid container>
            {/* {articleSponsoredAuthLimit <= 4 &&
              articleSponsoredAuthLimit >= 0 &&
              article.articleSponsoredAuth.slice(0, 4).map((article) => (
                <Fragment key={article._id}>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card article={article} />
                  </Grid>
                </Fragment>
              ))} */}

            {article.articleSponosoredGuest.slice(0, 4).map((article) => (
              <Fragment key={article._id}>
                <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                  <Card article={article} />
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default NoAarticle;
