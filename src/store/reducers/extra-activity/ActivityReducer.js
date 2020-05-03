import {
  GET_ACTIVITIES,
  SET_ACTIVITIES_LOADING,
} from "../../actions/ActionTypes";

const initialState = {
  activityList: [],
  isLoading: false,
};

const ActivityReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activityList: action.payload,
        isLoading: false,
      };

    case SET_ACTIVITIES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      break;
  }
  return newState;
};

export default ActivityReducer;
