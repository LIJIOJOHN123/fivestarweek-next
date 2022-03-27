import { ALERT_SET, ALERT_REMOVE } from "../../type";

const initialState = {
  alerts: {},
  loading: true,
};

export const alertReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ALERT_SET:
      return {
        ...state,
        alerts: payload,
        loading: false,
      };
    case ALERT_REMOVE:
      return {
        ...state,
        alerts: {},
        loading: true,
      };
    default:
      return state;
  }
};
