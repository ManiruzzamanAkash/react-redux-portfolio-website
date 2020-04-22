import { API_CATEGORY_LIST } from "../../../APIEndPoint";
import { GET_CATEGORIES } from "../ActionTypes";
import Axios from "axios";

export const getCategoryAction = () => dispatch => {
  Axios.get(API_CATEGORY_LIST)
    .then(res => {
      return dispatch(dispatchGetCategories(res.data.data));
    })
    .catch(err => {
      return dispatchGetCategories([]);
    });
};

const dispatchGetCategories = data => {
  return { type: GET_CATEGORIES, payload: data };
};
