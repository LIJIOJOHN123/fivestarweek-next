import { EARNING_LIST, PAYMENT_LIST, SCORE_LIST } from "../../type";

const intialState = {
  payment: [],
  loading: true,
  scoreList: [],
  scoreCount: 0,
  earnList: [],
  earnListCount: 0,
  bank: {},
};
const paymentReducer = (state = intialState, action) => {
  switch (action.type) {
    case PAYMENT_LIST:
      return {
        ...state,
        payment: action.payload.payment,
        loading: false,
      };
    case SCORE_LIST:
      return {
        ...state,
        loading: false,
        scoreList: action.payload.scores,
        scoreCount: action.payload.scoreCount,
      };
    case EARNING_LIST:
      return {
        ...state,
        loading: false,
        earnList: action.payload.earnings,
        earnListCount: action.payload.earningCount,
        bank: action.payload.bank,
      };

    default:
      return {
        ...state,
      };
  }
};

export default paymentReducer;
