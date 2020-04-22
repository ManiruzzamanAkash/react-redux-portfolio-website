import { GET_CATEGORIES } from "../../actions/ActionTypes";

const initialState = {
  categoryList: []
};

const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload
      };
    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
