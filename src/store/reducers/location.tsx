import { actionI } from "../actions/weather";
import { types } from "../actions/types/location";

interface locationReducerI {
  isLoading: boolean;
  locations: [string] | [];
  searching: string | "";
}
const initialState: locationReducerI = {
  isLoading: false,
  locations: [],
  searching: "",
};

const location = (state = initialState, action: actionI) => {
  switch (action.type) {
    case "":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LOCATIONS:
      return {
        ...state,
        searching: action.payload,
      };
    case types.GET_LOCATIONS_SUCCESS:
      return {
        isLoading: false,
        locations: action.payload,
        searching: "",
      };
    default:
      return state;
  }
};

export { location };
