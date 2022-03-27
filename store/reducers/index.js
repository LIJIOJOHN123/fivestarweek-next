import { combineReducers } from "redux";
import { alertReducer } from "./user/alertReducer";
import articleReducer from "./user/articleReducer";
import authReducer from "./user/authReducer";
import channelReducer from "./user/channelReducer";
import commentReducer from "./user/commentReducer";
import replyReducer from "./user/replyReducer";
import paymentReducer from "./user/paymentReducer";
import notificationReducer from "./user/notificationReducer";
import searchReducer from "./user/searchReducer";
import userReducer from "./admin/userReducer";
import languageReducer from "./user/languageReducer";
import localeReducer from "./user/localeReducer";
import sponsorReducer from "./user/sponsorReducer";
import surveyReducer from "./user/surveyReducer";
import categoryReducer from "./user/categoryReducer";

// COMBINED REDUCERS
const reducers = {
  article: articleReducer,
  channel: channelReducer,
  comment: commentReducer,
  reply: replyReducer,
  auth: authReducer,
  alert: alertReducer,
  payment: paymentReducer,
  notification: notificationReducer,
  search: searchReducer,
  user: userReducer,
  language: languageReducer,
  locale: localeReducer,
  sponsor: sponsorReducer,
  survey: surveyReducer,
  category: categoryReducer,
};

export default combineReducers(reducers);
