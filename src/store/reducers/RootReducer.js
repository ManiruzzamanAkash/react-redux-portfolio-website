import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

import PortfolioReducer from "../reducers/portfolios/PortfolioReducer";

const RootReducer = combineReducers(
  Object.assign(
    {
      PortfolioReducer
    },
    { Intl }
  )
);

export default RootReducer;
