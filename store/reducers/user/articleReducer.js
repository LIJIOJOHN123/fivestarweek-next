import { getLangauge } from "../../../utils/auth";
import {
  ARTICLE_BY_ID,
  ARTICLE_CLEAR,
  ARTICLE_FOLLOWED_CHANNELS,
  ARTICLE_VIOLATION,
  ARTICLE_SPONORE,
  ARTICLE_HOME,
} from "../../type";

const intialState = {
  article: {},
  language: "",
  loading: true,
  articleSponsore: [],
  articleFollowedChannels: [],
  articlesCount: 0,
  page: 0,
  language: getLangauge("language"),
  articleSponsoredAuth: [],
  articleSponosoredGuest: [],
  sponsoredChannels: [],
  suggestedChannels: [],
  surveys: [],
  articleSponsoreLimit: 0,
  articleHome: [],
  channelSuggestion: [],
  limitHome: 0,
  artHomeCount: 0,
};

const articleReducer = (state = intialState, action) => {
  switch (action.type) {
    case ARTICLE_BY_ID:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };
    case ARTICLE_CLEAR:
      return {
        ...state,
        loading: true,
        article: {},
      };
    case ARTICLE_SPONORE:
      return {
        ...state,
        articleSponsoredAuth: action.payload.sponsor,
        articleSponosoredGuest: action.payload.articlesGuest,
        loading: false,
        articleSponsoreLimit: action.limit,
      };

    case ARTICLE_FOLLOWED_CHANNELS:
      return {
        ...state,
        loading: false,
        articleFollowedChannels: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        surveys: action.payload.surveyList,
        page: action.page,
      };
    case ARTICLE_HOME:
      return {
        ...state,
        loading: false,
        articleHome: action.payload.articles,
        channelSuggestion: action.payload.channelGuest,
        limitHome: action.limit,
        artHomeCount: action.payload.articlesCount,
      };
    case ARTICLE_VIOLATION:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default articleReducer;
