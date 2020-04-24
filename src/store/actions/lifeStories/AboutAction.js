import { API_LIFESTORY, API_ABOUT_SETTINGS } from "../../../APIEndPoint";
import { GET_LIFE_STORIES, GET_ABOUT, SET_ABOUT_LOADING } from "../ActionTypes";
import Axios from "axios";

export const getAboutHistoryAction = (order = "asc") => dispatch => {
  dispatch({ type: SET_ABOUT_LOADING, payload: true });

  Axios.get(API_ABOUT_SETTINGS)
    .then(res => {
      return dispatch(dispatchGetAbout(res.data.data));
    })
    .catch(err => {
      dispatch({ type: SET_ABOUT_LOADING, payload: false });
      return dispatch(dispatchGetAbout([]));
    });

  Axios.get(`${API_LIFESTORY}?order=${order}`)
    .then(res => {
      dispatch({ type: SET_ABOUT_LOADING, payload: false });
      return dispatch(dispatchGetLifeStories(res.data.data));
    })
    .catch(err => {
      dispatch({ type: SET_ABOUT_LOADING, payload: false });
      return dispatch(dispatchGetLifeStories([]));
    });
};

export const getAboutAction = () => dispatch => {
  dispatch({ type: SET_ABOUT_LOADING, payload: true });

  Axios.get(API_ABOUT_SETTINGS)
    .then(res => {
      return dispatch(dispatchGetAbout(res.data.data));
    })
    .catch(err => {
      dispatch({ type: SET_ABOUT_LOADING, payload: false });
      return dispatch(dispatchGetAbout([]));
    });
};

const dispatchGetLifeStories = data => {
  return { type: GET_LIFE_STORIES, payload: data };
};

const dispatchGetAbout = data => {
  return { type: GET_ABOUT, payload: data };
};
