import {
  API_PORTFOLIO_LIST,
  API_PORTFOLIO_LIST_BY_CATEGORY
} from "../../../APIEndPoint";
import { GET_PROTFOLIOS, SET_PROTFOLIOS_LOADING } from "../ActionTypes";
import Axios from "axios";

export const getPortfolioAction = categoryID => dispatch => {
  dispatch({ type: SET_PROTFOLIOS_LOADING, payload: true });

  let apiEndPoint = API_PORTFOLIO_LIST;
  if (typeof categoryID !== "undefined" && categoryID !== 0) {
    apiEndPoint = `${API_PORTFOLIO_LIST_BY_CATEGORY}/${categoryID}`;
  }

  Axios.get(apiEndPoint)
    .then(res => {
      dispatch({ type: SET_PROTFOLIOS_LOADING, payload: false });
      return dispatch(dispatchGetPortfolios(res.data.data));
    })
    .catch(err => {
      dispatch({ type: SET_PROTFOLIOS_LOADING, payload: false });
      return dispatch(dispatchGetPortfolios([]));
    });
};

const dispatchGetPortfolios = data => {
  return { type: GET_PROTFOLIOS, payload: data };
};
