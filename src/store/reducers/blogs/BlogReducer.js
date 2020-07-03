import { GET_BLOGS, SET_BLOGS_LOADING } from "../../actions/ActionTypes";

const initialState = {
  blogList: [],
  isLoading: false,
};

const BlogReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogList: action.payload,
        isLoading: false,
      };

    case SET_BLOGS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      break;
  }
  return newState;
};

export default BlogReducer;
