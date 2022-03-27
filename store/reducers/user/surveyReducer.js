import {
  SURVEY_BY_ID_END_USER,
  SURVEY_BY_ID_USER,
  SURVEY_CLEAR,
  SURVEY_LIST_END_USER,
  SURVEY_LIST_USER,
} from "../../type";

const intialState = {
  surveys: [],
  survey: {},
  preference: {},
  loading: true,
  surveysEndUser: [],
  surveysProgress: [],
  surveysCompleted: [],
  surveyEndUser: {},
};

const surveyReducer = (state = intialState, action) => {
  switch (action.type) {
    case SURVEY_CLEAR:
      return {
        ...state,
        loading: true,
        survey: {},
        surveyEndUser: {},
      };
    case SURVEY_LIST_USER:
      return {
        ...state,
        loading: false,
        surveys: action.payload,
      };
    case SURVEY_BY_ID_USER:
      return {
        ...state,
        loading: false,
        survey: action.payload,
      };
    case SURVEY_LIST_END_USER:
      const { surveys } = action.payload;
      return {
        ...state,
        loading: false,
        surveysEndUser: surveys,
      };
    case SURVEY_BY_ID_END_USER:
      return {
        ...state,
        loading: false,
        surveyEndUser: action.payload.survey,
        preference: action.payload.preference,
      };
    default:
      return state;
  }
};

export default surveyReducer;
