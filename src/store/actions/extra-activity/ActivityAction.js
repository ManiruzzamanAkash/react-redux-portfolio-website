import {
  API_ACTIVITY_LIST,
  API_ACTIVITY_LIST_BY_TYPE,
} from "../../../APIEndPoint";
import { GET_ACTIVITIES, SET_ACTIVITIES_LOADING } from "../ActionTypes";
import Axios from "axios";

export const getActivityAction = (type) => (dispatch) => {
  dispatch({ type: SET_ACTIVITIES_LOADING, payload: true });

  let apiEndPoint = API_ACTIVITY_LIST;
  if (typeof type !== "undefined" && type !== 0) {
    apiEndPoint = `${API_ACTIVITY_LIST_BY_TYPE}/${type}`;
  }

  Axios.get(apiEndPoint)
    .then((res) => {
      dispatch({ type: SET_ACTIVITIES_LOADING, payload: false });
      return dispatch(dispatchGetActivities(res.data.data));
    })
    .catch((err) => {
      dispatch({ type: SET_ACTIVITIES_LOADING, payload: false });
      return dispatch(dispatchGetActivities([]));
    });
};

const dispatchGetActivities = (data) => {
  return { type: GET_ACTIVITIES, payload: data };
};
