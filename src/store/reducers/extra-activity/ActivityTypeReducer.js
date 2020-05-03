import { GET_ACTIVITY_TYPES } from "../../actions/ActionTypes";

const initialState = {
  typeList: [],
};

const ActivityTypeReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_ACTIVITY_TYPES:
      return {
        ...state,
        typeList: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default ActivityTypeReducer;
