import {
  REPLY_CLEAR,
  REPLY_CREATE,
  REPLY_DELETE,
  REPLY_LIKE,
  REPLY_LIST,
  REPLY_UNLIKE,
  REPLY_VIOLATION,
} from "../../type";

const intialState = {
  replies: [],
  loading: true,
};

const replyReducer = (state = intialState, action) => {
  switch (action.type) {
    case REPLY_LIST:
      return {
        loading: false,
        replies: action.payload,
      };
    case REPLY_CLEAR:
      return {
        loading: true,
        replies: [],
      };
    case REPLY_CREATE:
      return {
        ...state,
        replies: [action.payload, ...state.replies],
        loading: false,
      };

    case REPLY_DELETE:
      const deleteReply = state.replies.filter(
        (single) => single._id !== action.id
      );
      return {
        ...state,
        replies: deleteReply,
        loading: false,
      };
    case REPLY_LIKE:
      const replyLike = state.replies.map((reply) =>
        reply._id === action.id ? { reply, ...action.payload } : reply
      );
      return {
        ...state,
        loading: false,
        replies: replyLike,
      };
    case REPLY_UNLIKE:
      const replyUnlike = state.replies.map((reply) =>
        reply._id === action.id ? { reply, ...action.payload } : reply
      );
      return {
        ...state,
        loading: false,
        replies: replyUnlike,
      };
    case REPLY_VIOLATION:
      return {
        ...state,
        replies: state.replies,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default replyReducer;
