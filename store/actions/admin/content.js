import {
  ADMIN_ARTICLE_SPONSORED_LIST,
  ADMIN_CHANNEL_SPONSORED_LIST,
  ADMIN_SPONSORE_PENDING_LIST,
  ADMIN_SURVEY_LIST,
  ARTICLE_ADMIN_LIST,
  ARTICLE_SEARCH_RESULT,
  ARTICLE_VIOLATION_LIST,
  CHANNEL_ADMIN_LIST,
  CHANNEL_SEARCH_RESULT,
  COMMENT_ADMIN_LIST,
  COMMENT_SEARCH_RESULT,
  COMMENT_VIOLATION_LIST,
  REPLY_ADMIN_LIST,
  REPLY_SEARCH_RESULT,
  REPLY_VIOLATION_LIST,
  USER_SEARCH_RESULT,
} from "../../type";

export const channelList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/channels?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: CHANNEL_ADMIN_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const addAdditionalChannelDetails =
  (id, formData, limit) => async (dispatch) => {
    const token = getCookie("token");
    try {
      let res = await axios.post(
        `${process.env.SERVER_API}/admin/addchanneldetails/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(channelList(limit));
    } catch (error) {}
  };
export const channelBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockchannel/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelList());
  } catch (error) {}
};

export const channelUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockchannel/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelList());
  } catch (error) {}
};

export const channelVerfication = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channel/verification/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelList());
  } catch (error) {}
};

export const channelRemoveVerification = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channel/removeverification/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelList());
  } catch (error) {}
};

export const articleList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/articles?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ARTICLE_ADMIN_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const articleBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockarticle/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(articleList());
  } catch (error) {}
};

export const articleUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockarticle/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(articleList());
  } catch (error) {}
};

export const commentList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/commentlist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: COMMENT_ADMIN_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const commentBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockcomment/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(commentList());
  } catch (error) {}
};

export const commentUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockcomment/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(commentList());
  } catch (error) {}
};

export const replyList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/replylist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: REPLY_ADMIN_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const replyBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockreply/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(replyList());
  } catch (error) {}
};

export const replyUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockreply/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(replyList());
  } catch (error) {}
};

export const articleSponsore = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/approvearticlesponsore/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(articleSponsoreList());
  } catch (error) {}
};

export const channelSponsore = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/approvecahnnelsponsore/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelSponsoreList());
  } catch (error) {}
};
export const replyViolationList = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/replyviolationlist`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: REPLY_VIOLATION_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const userSearchList = (search) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/usersearch?key=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: USER_SEARCH_RESULT,
      payload: res.data,
    });
  } catch (error) {}
};
export const channelSearchList = (search) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/channelsearch?key=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: CHANNEL_SEARCH_RESULT,
      payload: res.data,
    });
  } catch (error) {}
};

export const articleSearchList = (search) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/articlesearch?key=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ARTICLE_SEARCH_RESULT,
      payload: res.data,
    });
  } catch (error) {}
};

export const commentSearchList = (search) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/commentsearch?key=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: COMMENT_SEARCH_RESULT,
      payload: res.data,
    });
  } catch (error) {}
};

export const replySearchList = (search) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/replysearch?key=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: REPLY_SEARCH_RESULT,
      payload: res.data,
    });
  } catch (error) {}
};

export const commentViolationList = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/violationcomments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: COMMENT_VIOLATION_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const articleViolationList = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/violationarticle`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ARTICLE_VIOLATION_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const addChannelDetails = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/addchanneldetails/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(scoreListPending(50));
  } catch (error) {}
};

//sponosre pending list

export const sponosrePendingList = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/sponsorpendinglist`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_SPONSORE_PENDING_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

//sponsore approve channel
export const channelSponsoreApprove = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channelapprove/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(sponosrePendingList());
  } catch (error) {}
};

////sponsore approve article
export const articleSponsoreApprove = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/articleapprove/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(sponosrePendingList());
  } catch (error) {}
};
//sponsore reject channel
export const channelSponsoreReject = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channelreject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(sponosrePendingList());
  } catch (error) {}
};

////sponsore reject article
export const articleSponsoreReject = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/articlereject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(sponosrePendingList(50));
  } catch (error) {}
};

//
export const surveyListAdmin = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(`${process.env.SERVER_API}/adminsurveylist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADMIN_SURVEY_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

////sponsore approve article
export const surveyApproveAdmin = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/adminsurveyapprove/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(surveyListAdmin());
  } catch (error) {}
};

////sponsore rect article
export const surveyRejectAdmin = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/adminsurveyreject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(surveyListAdmin());
  } catch (error) {}
};

// channel list

export const channelListSponsored = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/sponsorelistschannels`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_CHANNEL_SPONSORED_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

//article list sponsored
export const articleListSponsored = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/sponsorelistsarticles`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_ARTICLE_SPONSORED_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

//sponsore forced exit channel
export const channelForceExit = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channelsponsoreexit/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(channelListSponsored());
  } catch (error) {}
};

//sponsoer forced exit article
export const articleForceExit = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/articlesponsoreexit/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(articleListSponsored());
  } catch (error) {}
};
//survey approve all
export const surveyAppoveAllAdmin = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/adminsurveyapproveall/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(surveyListAdmin());
  } catch (error) {}
};
