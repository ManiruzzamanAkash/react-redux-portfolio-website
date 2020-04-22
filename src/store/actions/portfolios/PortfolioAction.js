import {
  API_PORTFOLIO_LIST,
  API_PORTFOLIO_LIST_BY_CATEGORY
} from "../../../APIEndPoint";
import { GET_PROTFOLIOS } from "../ActionTypes";
import Axios from "axios";

export const getPortfolioAction = categoryID => dispatch => {
  let apiEndPoint = API_PORTFOLIO_LIST;
  if (typeof categoryID !== "undefined" && categoryID !== 0) {
    apiEndPoint = `${API_PORTFOLIO_LIST_BY_CATEGORY}/${categoryID}`;
  }

  Axios.get(apiEndPoint)
    .then(res => {
      return dispatch(dispatchGetPortfolios(res.data.data));
    })
    .catch(err => {
      return dispatchGetPortfolios([]);
    });
};

const dispatchGetPortfolios = data => {
  return { type: GET_PROTFOLIOS, payload: data };
};
