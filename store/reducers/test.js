const intialState = {
  loading: true,
  users: [],
  limit: 0,
  total: 0,
};

const testReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_API":
      return {
        ...state,
        loading: false,
        users: action.payload.channels,
        limit: action.limit,
        total: 100,
      };

    default:
      return {
        ...state,
      };
  }
};

export default testReducer;
