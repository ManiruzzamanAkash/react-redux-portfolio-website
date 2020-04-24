import { API_STORE_CONTACT } from "../../../APIEndPoint";
import { STORE_CONTACT, SET_CONTACT_LOADING } from "../ActionTypes";
import Axios from "axios";

export const storeContactAction = data => dispatch => {
  dispatch({ type: SET_CONTACT_LOADING, payload: true });

  Axios.post(API_STORE_CONTACT, data)
    .then(res => {
      return dispatch(dispatchStoreContact(res.data));
    })
    .catch(err => {
      dispatch({ type: SET_CONTACT_LOADING, payload: false });
      return dispatch(dispatchStoreContact([]));
    });
};

const dispatchStoreContact = data => {
  return { type: STORE_CONTACT, payload: data };
};
