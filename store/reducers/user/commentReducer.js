import {
  COMMENT_BY_ID,
  COMMENT_CLEAR,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_EDIT,
  COMMENT_LIKE,
  COMMENT_LIST,
  COMMENT_UNLIKE,
  COMMENT_USER,
  COMMENT_VIOLATION,
} from "../../type";

const intialState = {
  loading: true,
  comments: [],
  comment: {},
  total: 0,
  limit: 0,
  commentByUser: [],
  limitByUser: 0,
  totalByUser: 0,
  publicLimit: 0,
  publicTotal: 0,
};

const commentReducer = (state = intialState, action) => {
  switch (action.type) {
    case COMMENT_LIST:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
        limit: action.limit,
        total: action.payload.commentCount,
      };
    case COMMENT_CLEAR:
      return {
        ...state,
        loading: true,
        comment: {},
      };
    case COMMENT_BY_ID:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    case COMMENT_EDIT:
      const editComment = state.comments.map((single) =>
        single._id === action.id ? { single, ...action.payload } : single
      );
      return {
        ...state,
        comments: editComment,
        loading: false,
      };
    case COMMENT_CREATE:
      return {
        ...state,
        loading: false,
        comments: [action.payload, ...state.comments],
      };
    case COMMENT_DELETE:
      const deleteComment = state.comments.filter(
        (single) => single._id !== action.id
      );
      return {
        ...state,
        comments: deleteComment,
        commentCount: state.commentCount,
        loading: false,
      };
    case COMMENT_LIKE:
      const commentLike = state.comments.map((comment) =>
        comment._id === action.id ? { comment, ...action.payload } : comment
      );
      return {
        ...state,
        loading: false,
        comments: commentLike,
      };
    case COMMENT_UNLIKE:
      const commentUnlike = state.comments.map((comment) =>
        comment._id === action.id ? { comment, ...action.payload } : comment
      );
      return {
        ...state,
        loading: false,
        comments: commentUnlike,
      };
    case COMMENT_VIOLATION:
      return {
        ...state,
        comments: state.comments,
        loading: false,
      };
    case COMMENT_USER:
      return {
        ...state,
        commentByUser: action.payload.comments,
        limitByUser: action.limit,
        totalByUser: action.payload.commentCount,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default commentReducer;
