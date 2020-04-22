import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = new createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
