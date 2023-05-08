import { Weather } from "@/data";
import { types } from "../actions/types/weather";
import { actionI } from "../actions/weather";

export interface stateI {
  data: Weather | null;
  isLoading: boolean;
  isError: boolean;
}

const INITIALSTATE: stateI = {
  data: null,
  isLoading: false,
  isError: false,
};


const weather = (state: stateI = INITIALSTATE, action: actionI): stateI => {
  switch (action.type) {
    case types.GET_WEATHER:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_WEATHER_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_WEATHER_ERROR:
      return {
        data: null,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export { weather };
