// REDUX ACTION TYPES

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const AUTH_LOADED = "AUTH_LOADED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const GOOGLE_LOGIN_SUCCESS = "GOOGLE_LOGIN_SUCCESS";
export const GOOGLE_LOGIN_FAIL = "GOOGLE_LOGIN_FAIL";
export const FACEBOOK_LOGIN_SUCCESS = "FACEBOOK_LOGIN_SUCCESS";
export const FACEBOOK_LOGIN_FAIL = "FACEBOOK_LOGIN_FAIL";
export const AUTH_USER_EDIT = "AUTH_USER_EDIT";
export const AUTH_USER_PASSWORD_CHANGE = "AUTH_USER_PASSWORD_CHANGE";
export const AUTH_USER_EMAIL_CHANGE = "AUTH_USER_EMAIL_CHANGE";
export const AUTH_USERNAME_CHANGE = "AUTH_USERNAME_CHANGE";
export const PROFILE_EDIT_ERROR = "PROFILE_EDIT_ERROR";
export const PUBLIC_PROFILE = "PUBLIC_PROFILE";
export const PUBLIC_COMMENT = "PUBLI_COMMENT";
export const LOGOUT = "LOGOUT";
export const ALERT_SET = "ALERT_SET";
export const ALERT_REMOVE = "ALERT_REMOVE";
export const BANK_ACCOUNT_ADD = "BANK_ACCOUNT_ADD";
export const BANK_ACCOUNT_EDIT = "BANK_ACCOUNT_EDIT";
export const USER_SPONSORE_LIST = "USER_SPONSORE_LIST";
export const PUBLIC_REFER_MESSAGE = "PUBLIC_REFER_MESSAGE";

export const CHANNEL_LIST = "CHANNEL_LIST";
export const CHANNEL_BY_ID = "CHANNEL_BY_ID";
export const CHANNEL_FOLLOW = "CHANNEL_FOLLOW";
export const CHANNEL_UNFOLLOW = "CHANNEL_UNFOLLOW";
export const CHANNEL_ARTICLE_CREATE = "CHANNEL_ARTICLE_CREATE";
export const CHANNEL_CREATE = "CHANNEL_CREATE";
export const CHANNEL_FOLLOWED = "CHANNEL FOLLOWED";
export const CHANNEL_EDIT = "CHANNEL_EDIT";
export const CHANNEL_DELETE = "CHANNEL_DELETE";
export const CHANNEL_CLEAR = "CHANNEL_CLEAR";
export const CHANNEL_ERROR = "CHANNEL_ERROR";
export const CHANNEL_USER_CREATED_LIST = "CHANNEL_USER_CREATED_LIST";
export const CHANNLE_FOLLOWED = "CHANNEL_FOLLOWED";
export const CHANNEL_UNFLLOWED = "CHANNEL_UNFOLLOWER";
export const CHANNEL_SPONOSORE = "CHANNEL_SPONOSORE";
export const CHANNEL_SUGGESTION = "CHANNEL_SUGGESTION";

export const ARTICLE_BY_ID = "ARTICLE_BY_ID";
export const ARTICLE_CLEAR = "ARTICLE_CLEAR";
export const ARTICLE_FOLLOWED_CHANNELS = "ARTICLE_fOLLOWED_CHANNELS";
export const ARTICLE_LIKE = "ARTICLE_LIKE";
export const ARTICLE_UNLIKE = "ARTICLE_UNLIKE";
export const ARTICLE_VIOLATION = "ARTICLE_VIOLATION";
export const ARTICLE_DELETE = "ARTICLE_DELETE";
export const ARTICLE_SPONORE = "ARTICLE_SPONSORE";
export const ARTICLE_HOME = "ARTICLE_HOME";

export const COMMENT_LIST = "COMMENT_LIST";
export const COMMENT_BY_ID = "COMMENT_BY_ID";
export const COMMENT_CLEAR = "COMMENT_CLEAR";
export const COMMENT_LIKE = "COMMENT_LIKE";
export const COMMENT_UNLIKE = "COMMENT_UNLIKE";
export const COMMENT_EDIT = "COMMENT_EDIT";
export const COMMENT_DELETE = "COMMENT_DELETE";
export const COMMENT_VIOLATION = "COMMENT_VIOLATION";
export const COMMENT_CREATE = "COMMENT_CREATE";
export const COMMENT_ERROR = "COMMENT_ERROR";
export const COMMENT_USER = "COMMENT_USER";
export const COMMENT_PUBLIC_STATUS = "COMMENT_PUBLIC_STATUS";

export const REPLY_LIST = "REPLY_LIST";
export const REPLY_CLEAR = "REPLY_CLEAR";
export const REPLY_LIKE = "REPLY_LIKE";
export const REPLY_UNLIKE = "REPLY_UNLIKE";
export const REPLY_DELETE = "REPLY_DELETE";
export const REPLY_VIOLATION = "REPLY_VIOLATION";
export const REPLY_CREATE = "REPLY_CREATE";
export const REPLY_ERROR = "REPLY_ERROR";

export const PAYMENT_LIST = "PAYMENT_LIST";
export const SCORE_LIST = "SCORE_LIST";
export const WITHDRAW_REQUEST = "WITHDRAW_REQUEST";
export const EARNING_LIST = "EARNING_LIST";

export const NOTIFICATION_LIST = "NOTIFICATION_LIST";
export const NOTIFICATION_READ = "NOTIFICATION_READ";
export const NOTIFICATION_ALL_READ = "NOTIFICATOIN_ALL_READ";
export const NOTIFICATION_LISTS = "NOTIFICATON_LISTS";

export const PRE_SEARCH_RESULT = "PRE_SEARCH_RESULT";
export const POST_SEARCH_RESULT = "POST_SEARCH_RESULT";

export const LANGUAGE_LIST = "LANGUAGE_LIST";
//FiveStarWeek

export const DEPARTMENT_LIST = "DEPARTMENT_LIST";
export const DEPARTMENT_BY_ID = "DEPARTMENT_BY_ID";
export const DEPARTMENT_ACCESS_REQUEST = "DEPARMENT_ACCESS_REQUEST";
export const DEPARTMENTS_LIST = "DEPARTMENTS_LIST";

export const LOCALE_LIST = "LOCAL_LIST";
//
export const SURVEY_LIST_USER = "SURVEY_LIST_USER";
export const SURVEY_BY_ID_USER = "SURVEY_BY_ID_USER";
export const SURVEY_LIST_END_USER = "SURVEY_LIST_END_USER";
export const SURVEY_BY_ID_END_USER = "SURVEY_BY_ID_END_USER";
export const SURVEY_CLEAR = "SURVEY_CLEAR";

//seller
export const PREMIUM_REGISTRATION = "PREMIUM_REGISTRATION";
//category
export const CATEGORY_LIST = "CATEGORY_LIST";
export const CATEGORY_BY_ID = "CATEGORY_BY_ID";
export const CATEGORY_CLEAR = "CATEGORY_CLEAR";
//admin

export const ADMIN_TASKS_LIST = "ADMIN_TASK_LIST";
export const ADMIN_DEPARTMENT_LIST = "ADMIN_DEPARTMENT_LIST";
export const ADMIN_TEAM_LIST = "ADMIN_TEAM_LIST";

export const USER_LIST = "USER_LIST";
export const CHANNEL_ADMIN_LIST = "CHANNEL_ADMIN_LIST";
export const ARTICLE_ADMIN_LIST = "ARTICLE_ADMIN_LIST";
export const COMMENT_ADMIN_LIST = "COMMENT_ADMIN_LIST";
export const REPLY_ADMIN_LIST = "REPLY_ADMIN_LIST";
export const SPONSORE_PRICE_LATEST = "SPONSORE_PRICE_LATEST";
export const ADMIN_ARTICLE_SPONSORED_LIST = "ARTICLE_SPONSORED_LIST";
export const ADMIN_CHANNEL_SPONSORED_LIST = "CHANNEL_SPONSORED_LIST";
export const ARTICLE_VIOLATION_LIST = "ARTILCE_VIOLATION_LIST";
export const COMMENT_VIOLATION_LIST = "COMMENT_VIOLATION_LIST";
export const REPLY_VIOLATION_LIST = "REPLY_VIOLATION_LIST";
export const USER_SEARCH_RESULT = "USER_SEARCH_RESULT";
export const CHANNEL_SEARCH_RESULT = "CHANNEL_SEARCH_RESULT";
export const ARTICLE_SEARCH_RESULT = "ARTICLE_SEARCH_RESULT";
export const COMMENT_SEARCH_RESULT = "COMMENT_SEARCH_RESULT";
export const REPLY_SEARCH_RESULT = "REPLY_SEARCH_RESULT";
export const ADMIN_PAYMENT_LIST = "ADMIN_PAYMENT_LIST";
export const ADMIN_SCORE_LIST = "ADMIN_SCORE_LIST";
export const ADMIN_EARNING_LIST = "ADMIN_EARNING_LIST";
export const ADMIN_SCORE_REQUEST_LIST = "ADMIN_SCORE_REQUEST_LIST";
export const ADMIN_WITHDRAWAL_LIST = "ADMIN_WITHDRAWAL_LIST";
export const ADMIN_SPONSORE_PENDING_LIST = "ADMIN_SPONSORE_PENDING_LIST";
export const ADMIN_SURVEY_LIST = "ADMIN_SURVEY_LIST";
export const ADMIN_PREMIUM_LIST = "ADMIN_PREMIUM_LIST";
export const ADMIN_PREIMIUM_APPROVE = "ADMIN_PREMIUM_APPROVE";
export const ADMIN_PUBLISHER_LIST = "ADMIN_PUBLIISHER_LIST";
export const ADMIN_CATEGORY_LIST = "ADMIN_CATEGORY_LIST";
export const ADMIN_CATEGORY_BY_ID = "ADMIN_CATEGORY_BY_ID";
