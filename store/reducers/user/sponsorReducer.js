import { USER_SPONSORE_LIST } from "../../type";

const intialState = {
  channelSponsore: [],
  articleSponsore: [],
  loading: true,
};

const sponsorReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_SPONSORE_LIST:
      return {
        ...state,
        loading: false,
        channelSponsore: action.payload.sponsorChannel,
        articleSponsore: action.payload.sponsorArticle,
      };
    default:
      return state;
  }
};

export default sponsorReducer;
