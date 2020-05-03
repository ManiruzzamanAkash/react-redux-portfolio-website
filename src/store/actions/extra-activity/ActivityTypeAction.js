import { API_ACTIVITY_TYPE_LIST } from "../../../APIEndPoint";
import { GET_ACTIVITY_TYPES } from "../ActionTypes";
import Axios from "axios";

export const getActivityTypeAction = () => (dispatch) => {
  Axios.get(API_ACTIVITY_TYPE_LIST)
    .then((res) => {
      return dispatch(dispatchGetActivityTypes(res.data.data));
    })
    .catch((err) => {
      return dispatchGetActivityTypes([]);
    });
};

const dispatchGetActivityTypes = (data) => {
  return { type: GET_ACTIVITY_TYPES, payload: data };
};
