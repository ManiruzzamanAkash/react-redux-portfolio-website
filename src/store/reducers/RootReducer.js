import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

import PortfolioReducer from "../reducers/portfolios/PortfolioReducer";
import AboutReducer from "../reducers/about/AboutReducer";
import CategoryReducer from "../reducers/portfolios/CategoryReducer";
import ContactReducer from "../reducers/contact/ContactReducer";
import ActivityTypeReducer from "../reducers/extra-activity/ActivityTypeReducer";
import ActivityReducer from "../reducers/extra-activity/ActivityReducer";
import BlogReducer from "../reducers/blogs/BlogReducer";

const RootReducer = combineReducers(
  Object.assign(
    {
      PortfolioReducer,
      CategoryReducer,
      AboutReducer,
      ContactReducer,
      ActivityTypeReducer,
      ActivityReducer,
      BlogReducer,
    },
    { Intl }
  )
);

export default RootReducer;
