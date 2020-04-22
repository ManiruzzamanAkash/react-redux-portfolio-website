import { GET_PROTFOLIOS } from "../../actions/ActionTypes";

const initialState = {
  portfolioList: []
};

const PortfolioReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case GET_PROTFOLIOS:
      return {
        ...state,
        portfolioList: action.payload
      };
    default:
      break;
  }
  return newState;
};

export default PortfolioReducer;
