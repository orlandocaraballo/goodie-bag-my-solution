import axios from "axios";
import { combineReducers } from "redux";
import allCandiesReducer from "./allCandies";

export default combineReducers({
  allCandies: allCandiesReducer,
});
