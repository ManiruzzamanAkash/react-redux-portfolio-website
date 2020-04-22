import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

import PortfolioReducer from "../reducers/portfolios/PortfolioReducer";
import LifeStoryReducer from "../reducers/about/LifeStoryReducer";
import CategoryReducer from "../reducers/portfolios/CategoryReducer";

const RootReducer = combineReducers(
  Object.assign(
    {
      PortfolioReducer,
      LifeStoryReducer,
      CategoryReducer
    },
    { Intl }
  )
);

export default RootReducer;
