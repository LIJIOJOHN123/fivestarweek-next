import { PRE_SEARCH_RESULT, POST_SEARCH_RESULT } from "../../type";

const intialState = {
  preresult: [],
  loading: true,
  postresult: [],
  articlelimit: 0,
  channellimit: 0,
  videolimit: 0,
  commentlimit: 0,
};

const searchReducer = (state = intialState, action) => {
  switch (action.type) {
    case PRE_SEARCH_RESULT:
      return {
        ...state,
        preresult: action.payload,
        loading: false,
      };
    case POST_SEARCH_RESULT:
      return {
        ...state,
        postresult: action.payload,
        articlelimit: action.limit,
        channellimit: action.limited,
        videolimit: action.limits,
        commentlimit: action.limiting,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
