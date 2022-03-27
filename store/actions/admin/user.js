import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  ADMIN_ARTICLE_SPONSORED_LIST,
  ADMIN_CHANNEL_SPONSORED_LIST,
  ADMIN_EARNING_LIST,
  ADMIN_PAYMENT_LIST,
  ADMIN_PREMIUM_LIST,
  ADMIN_PUBLISHER_LIST,
  ADMIN_SCORE_LIST,
  ADMIN_SCORE_REQUEST_LIST,
  ADMIN_SPONSORE_PENDING_LIST,
  ADMIN_SURVEY_LIST,
  ADMIN_WITHDRAWAL_LIST,
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
  SPONSORE_PRICE_LATEST,
  USER_LIST,
  USER_SEARCH_RESULT,
  ADMIN_CATEGORY_LIST,
  ADMIN_CATEGORY_BY_ID,
} from "../../type";

export const userList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/users?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: USER_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const userBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockuser/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userList());
  } catch (error) {}
};

export const userUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockuser/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userList());
  } catch (error) {}
};

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

export const channelHome = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/homechannel/${id}`,
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

export const channelNormal = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/channelstatustonormal/${id}`,
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

export const articleNormal = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/sponrearticletonormal/${id}`,
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

//get pricing
export const sponsoreLatestPrice = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/sponsoreprice`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: SPONSORE_PRICE_LATEST,
      payload: res.data,
    });
  } catch (error) {}
};

//post
export const sponsorePricing = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/sponsoreprice`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(sponsoreLatestPrice());
  } catch (error) {}
};

//get article violation
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

// get comment violation
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
//get reply violation
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

//payment
export const paymentList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/paymentlist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_PAYMENT_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const paymentAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/addpayment/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {}
};
export const paymentRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/removepayment/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {}
};
//earnings
export const earningList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/earninglist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_EARNING_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const earningAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/addearning/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(earningList(50));
  } catch (error) {}
};
export const earningRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/removeearning/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(earningList(50));
  } catch (error) {}
};
//withdrawal
export const withdrawalList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/withdrawallist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_WITHDRAWAL_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const withdrawalApprove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/approvewithdrawal/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(withdrawalList(50));
  } catch (error) {}
};

//score
export const scoreList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/adminscorelist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_SCORE_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const scoreAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/scoreadd/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(scoreList(50));
  } catch (error) {}
};
export const scoreRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/scoreremove/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(scoreList(50));
  } catch (error) {}
};

export const scoreListPending = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/pendingapprovelist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_SCORE_REQUEST_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const scoreRequestApprove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/approverequest/${id}`,
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
//channel details

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

//preimium user list
export const premiumUserList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.get(
      `${process.env.SERVER_API}/premieruserlist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_PREMIUM_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

//preimium user list
export const premiumUserApprove = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/premieruserlistapprove/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(premiumUserList(200));
  } catch (error) {}
};

//preimium user list
export const publisherList = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.get(`${process.env.SERVER_API}/admin/publishers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADMIN_PUBLISHER_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const publisherBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/publsher/block/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(publisherList());
  } catch (error) {}
};

export const publisherUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/publsher/unblock/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(publisherList());
  } catch (error) {}
};

//category

export const categoryAdminList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.get(`${process.env.SERVER_API}/admin/categorylist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADMIN_CATEGORY_LIST,
      payload: res.data,
      limit: limit,
    });
  } catch (error) {}
};
//
export const categoryAdminById = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.get(`${process.env.SERVER_API}/admin/catego ry_by_id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADMIN_CATEGORY_BY_ID,
      data: res.data,
    });
  } catch (error) {}
};
export const categoryCreate = (formData, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/category_create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryAdminList(limit));
  } catch (error) {}
};
export const categoryEditById = (id, formData, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/category_edit/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryAdminList(limit));
  } catch (error) {}
};

export const categoryAddChannel = (id, formData, limit) => async (dispatch) => {
  let cid = formData.channel;
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/category_add_channel/${id}/${cid}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryAdminList(limit));
  } catch (error) {}
};
export const categoryRemoveChannel =
  (id, formData, limit) => async (dispatch) => {
    let cid = formData.channel;
    const token = getCookie("token");
    try {
      await axios.post(
        `${process.env.SERVER_API}/admin/category_remove_channel/${id}/${cid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(categoryAdminList(limit));
    } catch (error) {}
  };

export const categoryblock = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/category_block/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryAdminList(limit));
  } catch (error) {}
};

export const categoryUnblock = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/category_unblock/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryAdminList(limit));
  } catch (error) {}
};
