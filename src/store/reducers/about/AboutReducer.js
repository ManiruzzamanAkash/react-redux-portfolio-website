import {
  GET_LIFE_STORIES,
  SET_ABOUT_LOADING,
  GET_ABOUT
} from "../../actions/ActionTypes";

const initialState = {
  lifeStoryList: [],
  about: {},
  isLoading: false
};

const AboutReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_LIFE_STORIES:
      return {
        ...state,
        lifeStoryList: action.payload,
        isLoading: false
      };

    case GET_ABOUT:
      return {
        ...state,
        about: action.payload,
        isLoading: false
      };

    case SET_ABOUT_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      break;
  }
  return newState;
};

export default AboutReducer;
