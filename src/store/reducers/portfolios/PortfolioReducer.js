import {
  GET_PROTFOLIOS,
  SET_PROTFOLIOS_LOADING
} from "../../actions/ActionTypes";

const initialState = {
  portfolioList: [],
  isLoading: false
};

const PortfolioReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_PROTFOLIOS:
      return {
        ...state,
        portfolioList: action.payload,
        isLoading: false
      };

    case SET_PROTFOLIOS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      break;
  }
  return newState;
};

export default PortfolioReducer;
