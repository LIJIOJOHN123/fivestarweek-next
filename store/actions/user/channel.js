import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  CHANNEL_BY_ID,
  CHANNEL_CLEAR,
  CHANNEL_CREATE,
  CHANNEL_DELETE,
  CHANNEL_EDIT,
  CHANNEL_ERROR,
  CHANNEL_FOLLOW,
  CHANNEL_FOLLOWED,
  CHANNEL_LIST,
  CHANNEL_SPONOSORE,
  CHANNEL_SUGGESTION,
  CHANNEL_UNFLLOWED,
  CHANNEL_UNFOLLOW,
  CHANNEL_USER_CREATED_LIST,
} from "../../type";
import { alertSet } from "./alert";

//clean previous state
export const channelClear = () => {
  return {
    type: CHANNEL_CLEAR,
  };
};

//get all channels for public
export const channelList = (limit) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/channels?limit=${limit}`
  );
  return dispatch({
    type: CHANNEL_LIST,
    payload: res.data,
    limit: limit,
  });
};

//get all channel article by id
export const channelArticle = (id, limit, restriction) => async (dispatch) => {
  restriction === false && dispatch(channelClear());
  const res = await axios.get(
    `${process.env.SERVER_API}/channels/${id}?limit=${limit}`,
    {}
  );
  dispatch({
    type: CHANNEL_BY_ID,
    payload: res.data,
    limit: limit,
  });
};

//channel delete

export const channelDelete = (id) => async (dispatch) => {
  const token = getCookie("token");

  const res = await axios.put(
    `${process.env.SERVER_API}/channel/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(alertSet("Channel has been deleted successfully", "success"));

  dispatch({
    type: CHANNEL_DELETE,
    payload: res.data,
    id: id,
  });
};

//channel edit
export const channelEdit = (formData, id) => async (dispatch) => {
  const token = getCookie("token");

  try {
    const res = await axios.patch(
      `${process.env.SERVER_API}/channel/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("Channel has been updated successfully", "success"));

    dispatch({
      type: CHANNEL_EDIT,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

//channel unfollow

export const channelUnfollow = (id, routes) => async (dispatch) => {
  const token = getCookie("token");

  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/channel/${id}/unfollow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: CHANNEL_UNFOLLOW,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

//channel follow
export const channelFollow = (id, routes) => async (dispatch) => {
  const token = getCookie("token");

  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/channel/${id}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelSuggestedList(12));
    dispatch(channelSponsorePublic(20));
    dispatch({
      type: CHANNEL_FOLLOW,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};
//channel create

export const channelCreate = (formData) => async (dispatch) => {
  const token = getCookie("token");

  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/channel`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("You have created channel successfully", "success"));
    dispatch({
      type: CHANNEL_CREATE,
      payload: res.data,
    });
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: CHANNEL_ERROR,
      payload: error.response.data.message,
    });
  }
};
//channle list by users
export const channelCreatedUserList = (limit) => async (dispatch) => {
  const token = getCookie("token");

  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/channel?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: CHANNEL_USER_CREATED_LIST,
      payload: res.data,
      limits: limit,
    });
  } catch (error) {}
};

//unfollowed channels list
export const channelUnfollowedList = (limit, tokens) => async (dispatch) => {
  const token = getCookie("token");

  const res = await axios.get(
    `${process.env.SERVER_API}/nonchannel/unfollowed?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
  dispatch({
    type: CHANNEL_UNFLLOWED,
    payload: res.data,
    limit: limit,
  });
};
//channel followed list
export const channelFollowed = (limit) => async (dispatch) => {
  const token = getCookie("token");

  const res = await axios.get(
    `${process.env.SERVER_API}/nonchannel/followed?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: CHANNEL_FOLLOWED,
    payload: res.data,
    limit: limit,
  });
};

//article sponsore
export const articleSponsor =
  (id, formData, channel, limit) => async (dispatch) => {
    const token = getCookie("token");

    const res = await axios.post(
      `${process.env.SERVER_API}/article/${id}/sponsore`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("You request has been sent successfully!", "success"));

    dispatch(channelArticle(channel, limit, true));
  };
// post article in channel

export const channelCreateArticle =
  (id, formData, limit) => async (dispatch) => {
    const token = getCookie("token");

    try {
      await axios.post(
        `${process.env.SERVER_API}/channel/${id}/article`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        alertSet(
          "Your acticle has been posted on your channel successfully!",
          "success"
        )
      );
      dispatch(channelArticle(id, limit, true));
    } catch (error) {
      dispatch(alertSet(error.response.data.message, "error"));
    }
  };

export const channelSponsorePublic = (limit) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const res = await axios.get(
      `${process.env.SERVER_API}/channelsponosrelist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: CHANNEL_SPONOSORE,
      payload: res.data,
      limit: limit,
    });
  } catch (error) {
    console.log(error);
  }
};

export const channelSuggestedList = (limit) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const res = await axios.get(
      `${process.env.SERVER_API}/channel/suggested?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: CHANNEL_SUGGESTION,
      payload: res.data,
      limit: limit,
    });
  } catch (error) {
    console.log(error);
  }
};
