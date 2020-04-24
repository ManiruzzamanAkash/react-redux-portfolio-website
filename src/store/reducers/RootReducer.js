import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

import PortfolioReducer from "../reducers/portfolios/PortfolioReducer";
import AboutReducer from "../reducers/about/AboutReducer";
import CategoryReducer from "../reducers/portfolios/CategoryReducer";
import ContactReducer from "../reducers/contact/ContactReducer";

const RootReducer = combineReducers(
  Object.assign(
    {
      PortfolioReducer,
      CategoryReducer,
      AboutReducer,
      ContactReducer
    },
    { Intl }
  )
);

export default RootReducer;
