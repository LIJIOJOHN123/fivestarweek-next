import {
  NOTIFICATION_ALL_READ,
  NOTIFICATION_LIST,
  NOTIFICATION_LISTS,
  NOTIFICATION_READ,
} from "../../type";

const intialState = {
  notifications: [],
  loading: true,
  limit: 0,
  total: 0,
  unread: 0,
  notification: [],
};

const notificationReducer = (state = intialState, action) => {
  switch (action.type) {
    case NOTIFICATION_LIST:
      return {
        ...state,
        notifications: action.payload.notifications,
        limit: action.limit,
        total: action.payload.notificationCount,
        unread: action.payload.notificationUnread,
        loading: false,
      };
    case NOTIFICATION_LISTS:
      return {
        ...state,
        notification: action.payload.notifications,
        limit: action.limit,
        total: action.payload.notificationCount,
        unread: action.payload.notificationUnread,
        loading: false,
      };
    case NOTIFICATION_READ:
      const notficationRead = state.notifications.filter(
        (notification) => notification._id !== action.id
      );
      return {
        ...state,
        notifications: notficationRead,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notificationReducer;
