import { SET_CONTACT_LOADING, STORE_CONTACT } from "../../actions/ActionTypes";

const initialState = {
  isLoading: false,
  message: "",
  status: false
};

const ContactReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case STORE_CONTACT:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        isLoading: false
      };

    case SET_CONTACT_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      break;
  }
  return newState;
};

export default ContactReducer;
