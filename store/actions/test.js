import axios from "axios";

export const fetchArticle = (limit) => async (dispatch) => {
  console.log(limit);
  const res = await axios.get(
    `https://fivestarweek.com/api/channels?limit=${limit}`
  );
  console.log(res.data);
  return dispatch({
    type: "FETCH_API",
    payload: res.data,
    limit,
  });
};
