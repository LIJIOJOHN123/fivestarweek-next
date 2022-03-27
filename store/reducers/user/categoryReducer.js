import { CATEGORY_BY_ID, CATEGORY_CLEAR, CATEGORY_LIST } from "../../type";

const intialState = {
  categories: [],
  loading: true,
  category: {},
  categoryLimit: 0,
  articles: [],
  categoryCount: 0,
  categoryIdLimit: 0,
  articlesCount: 0,
};

const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categories: action.payload.items,
        loading: false,
        categoryLimit: action.limit,
        categoryCount: action.payload.categoriesCount,
      };
    case CATEGORY_CLEAR:
      return {
        ...state,
        category: {},
        articles: [],
        loading: true,
      };
    case CATEGORY_BY_ID:
      return {
        ...state,
        category: action.payload.category,
        articles: action.payload.articles,
        loading: false,
        categoryIdLimit: action.limit,
        articlesCount: action.payload.articlesCount,
      };
    default:
      return {
        ...state,
      };
  }
};

export default categoryReducer;
