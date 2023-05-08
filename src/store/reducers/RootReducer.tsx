import { combineReducers } from "redux";
import { weather } from "./weather";
import { location } from "./location";

export const RootReducer = combineReducers({
  weather,
  location
})
