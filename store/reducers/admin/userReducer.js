import {
  ADMIN_EARNING_LIST,
  ADMIN_PAYMENT_LIST,
  ADMIN_SCORE_LIST,
  ADMIN_SCORE_REQUEST_LIST,
  ADMIN_WITHDRAWAL_LIST,
  ARTICLE_ADMIN_LIST,
  ARTICLE_SEARCH_RESULT,
  ARTICLE_VIOLATION_LIST,
  CHANNEL_ADMIN_LIST,
  CHANNEL_SEARCH_RESULT,
  COMMENT_ADMIN_LIST,
  COMMENT_SEARCH_RESULT,
  COMMENT_VIOLATION_LIST,
  REPLY_ADMIN_LIST,
  REPLY_SEARCH_RESULT,
  REPLY_VIOLATION_LIST,
  SPONSORE_PRICE_LATEST,
  USER_LIST,
  USER_SEARCH_RESULT,
  ADMIN_SPONSORE_PENDING_LIST,
  ADMIN_SURVEY_LIST,
  ADMIN_CHANNEL_SPONSORED_LIST,
  ADMIN_ARTICLE_SPONSORED_LIST,
  ADMIN_PREMIUM_LIST,
  ADMIN_PUBLISHER_LIST,
  ADMIN_CATEGORY_LIST,
  ADMIN_CATEGORY_BY_ID,
} from "../../type";

const intialState = {
  users: [],
  loading: true,
  channels: [],
  articles: [],
  comments: [],
  replies: [],
  userCount: 0,
  channelCount: 0,
  articleCount: 0,
  commentCount: 0,
  replyCount: 0,
  sponsoreArticlesPending: [],
  sponsoreChannelsPending: [],
  sponsoredprice: {},
  sponsorechannellist: [],
  sponsorearticlelist: [],
  articleViolation: [],
  commentViolation: [],
  replyViolation: [],
  earningsList: [],
  withdrawalList: [],
  paymentList: [],
  scoreList: [],
  scoreRequestList: [],
  channelSponsorePending: [],
  articleSponsorePending: [],
  surveys: [],
  premiumUserList: [],
  publisherList: [],
  categories: [],
  category: {},
  categoryLimit: 0,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        userCount: action.payload.usersCount,
      };
    case CHANNEL_ADMIN_LIST:
      const { channels } = action.payload;
      return {
        ...state,
        channels: channels,
        loading: false,
        channelCount: action.payload.channelCount,
      };
    case ARTICLE_ADMIN_LIST:
      return {
        ...state,
        articles: action.payload.articles,
        loading: false,
        articleCount: action.payload.articlesCount,
      };
    case COMMENT_ADMIN_LIST:
      return {
        ...state,
        comments: action.payload.comments,
        commentCount: action.payload.commentCount,
        loading: false,
      };
    case REPLY_ADMIN_LIST:
      return {
        ...state,
        replies: action.payload.replies,
        replyCount: action.payload.replyCount,
        loading: false,
      };

    case SPONSORE_PRICE_LATEST:
      return {
        ...state,
        sponsoredprice: action.payload,
        loading: false,
      };

    case USER_SEARCH_RESULT:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case CHANNEL_SEARCH_RESULT:
      return {
        ...state,
        channels: action.payload.channels,
        loading: false,
      };
    case ARTICLE_SEARCH_RESULT:
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
      };
    case COMMENT_SEARCH_RESULT:
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
      };
    case REPLY_SEARCH_RESULT:
      return {
        ...state,
        loading: false,
        replies: action.payload.replies,
      };

    case ARTICLE_VIOLATION_LIST:
      return {
        ...state,
        articleViolation: action.payload,
        loading: false,
      };
    case COMMENT_VIOLATION_LIST:
      return {
        ...state,
        commentViolation: action.payload,
        loading: false,
      };
    case REPLY_VIOLATION_LIST:
      return {
        ...state,
        replyViolation: action.payload,
        loading: false,
      };
    case ADMIN_SCORE_LIST:
      return {
        ...state,
        scoreList: action.payload.scoreList,
        loading: false,
      };
    case ADMIN_SCORE_REQUEST_LIST:
      return {
        ...state,
        scoreRequestList: action.payload.pendingList,
        loading: false,
      };
    case ADMIN_EARNING_LIST:
      return {
        ...state,
        earningsList: action.payload.earningsList,
        loading: false,
      };
    case ADMIN_WITHDRAWAL_LIST:
      return {
        ...state,
        withdrawalList: action.payload.withdrawal,
        loading: false,
      };
    case ADMIN_PAYMENT_LIST:
      return {
        ...state,
        paymentList: action.payload.payment,
        loading: false,
      };
    case ADMIN_SPONSORE_PENDING_LIST:
      return {
        ...state,
        loading: false,
        channelSponsorePending: action.payload.sponsorChannel,
        articleSponsorePending: action.payload.sponsorArticle,
      };
    case ADMIN_SURVEY_LIST:
      return {
        ...state,
        loading: false,
        surveys: action.payload,
      };
    case ADMIN_CHANNEL_SPONSORED_LIST:
      return {
        ...state,
        loading: false,
        sponsorechannellist: action.payload.sponsorChannel,
      };
    case ADMIN_ARTICLE_SPONSORED_LIST:
      return {
        ...state,
        loading: false,
        sponsorearticlelist: action.payload.sponsorArticle,
      };
    case ADMIN_PREMIUM_LIST:
      return {
        ...state,
        loading: false,
        premiumUserList: action.payload,
      };
    case ADMIN_PUBLISHER_LIST:
      return {
        ...state,
        loading: false,
        publisherList: action.payload.publishers,
      };
    case ADMIN_CATEGORY_LIST:
      return {
        ...state,
        loading: false,
        categoryLimit: action.limit,
        categories: action.payload.categories,
      };
    case ADMIN_CATEGORY_BY_ID:
      return {
        ...state,
        loading: false,
        category: action.payload.category,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
