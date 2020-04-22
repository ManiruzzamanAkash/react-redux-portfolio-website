import { GET_LIFE_STORIES } from "../../actions/ActionTypes";

const initialState = {
  lifeStoryList: []
};

const LiefStoryReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_LIFE_STORIES:
      return {
        ...state,
        lifeStoryList: action.payload
      };
    default:
      break;
  }
  return newState;
};
export default LiefStoryReducer;
