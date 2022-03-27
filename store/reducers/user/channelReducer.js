import {
  CHANNEL_BY_ID,
  CHANNEL_CLEAR,
  CHANNEL_CREATE,
  CHANNEL_DELETE,
  CHANNEL_EDIT,
  CHANNEL_FOLLOW,
  CHANNEL_FOLLOWED,
  CHANNEL_LIST,
  CHANNEL_SPONOSORE,
  CHANNEL_SUGGESTION,
  CHANNEL_UNFLLOWED,
  CHANNEL_UNFOLLOW,
  CHANNEL_USER_CREATED_LIST,
} from "../../type";

const intialState = {
  channels: [],
  channelCategory: [],
  loading: true,
  channelsUnFollowedList: [],
  channelsFollowed: [],
  channelsCreated: [],
  channel: {},
  total: 0,
  limit: 0,
  totalCreatedUser: 0,
  limitCreatedUser: 0,
  sponsored: [],
  limitSponsore: 0,
  followedLimit: 0,
  followedTotal: 0,
  channelSponsoreAuth: [],
  channelSponsoreGuest: [],
  channelSponsoreLimit: 0,
  channelSuggestion: [],
  channelSuggestionLimit: 0,
};

const channelReducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANNEL_LIST:
      return {
        ...state,
        channels: action.payload.channels,
        total: action.payload.channelCount,
        limit: action.limit,
        loading: false,
      };

    case CHANNEL_UNFLLOWED:
      return {
        ...state,
        channelsUnFollowedList: action.payload.channels,
        total: action.payload.channelCount,
        limit: action.limit,
        loading: false,
      };
    case CHANNEL_USER_CREATED_LIST:
      return {
        ...state,
        channelsCreated: action.payload.channel,
        totalCreatedUser: action.payload.channelCount,
        limitCreatedUser: action.limits,
        loading: false,
      };
    case CHANNEL_CREATE:
      return {
        ...state,
        loading: false,
        channelsUnFollowedList: [
          action.payload,
          ...state.channelsUnFollowedList,
        ],
        channelsCreated: [action.payload, ...state.channelsCreated],
      };
    case CHANNEL_FOLLOWED:
      return {
        ...state,
        loading: false,
        channelsFollowed: action.payload.channels,
        followedLimit: action.limit,
        followedTotal: action.payload.channelCount,
      };

    case CHANNEL_EDIT:
      const editChannel = state.channelsCreated.map((single) =>
        single._id === action.id ? { single, ...action.payload } : single
      );
      return {
        ...state,
        channelsCreated: editChannel,
        loading: false,
      };
    case CHANNEL_DELETE:
      const deleteChannel = state.channelsCreated.filter(
        (single) => single._id !== action.id
      );
      return {
        ...state,
        channelsCreated: deleteChannel,
        loading: false,
      };
    case CHANNEL_FOLLOW:
      const channelFollow = state.channelsUnFollowedList.filter(
        (channel) => channel._id !== action.id
      );

      return {
        ...state,
        channelsUnFollowedList: channelFollow,
        loading: false,
      };
    case CHANNEL_UNFOLLOW:
      const channelUnfollow = state.channelsFollowed.filter(
        (channel) => channel._id !== action.id
      );
      return {
        ...state,
        channelsFollowed: channelUnfollow,
        loading: false,
      };
    case CHANNEL_BY_ID:
      return {
        ...state,
        channel: action.payload,
        limit: action.limit,
        total: action.payload.articleCount,
        loading: false,
      };
    case CHANNEL_CLEAR:
      return {
        ...state,
        channel: {},
        loading: true,
        channels: [],
        total: 0,
        total: 0,
      };
    case CHANNEL_SPONOSORE:
      return {
        ...state,
        channelSponsoreAuth: action.payload.channelGuest,
        channelSponsoreGuest: action.payload.channelGuest,
        loading: false,
        channelSponsoreLimit: action.limit,
      };
    case CHANNEL_SUGGESTION:
      return {
        ...state,
        loading: false,
        channelSuggestion: action.payload.channels,
        channelSuggestionLimit: action.limit,
      };
    default:
      return state;
  }
};

export default channelReducer;
