import { wait } from "@/utils/common";
import { types } from "./types/weather";

export interface actionI {
  type: string;
  payload: any;
}




let timerWait

const APIKey = "efd3b1254ce717568db80738439e5545";
const city = "LONDON";

export const getWeather = () => {
  return {
    type: types.GET_WEATHER,
  };
};

export const getWeatherSuccess = (data: any) => {
  return {
    type: types.GET_WEATHER_SUCCESS,
    payload: data,
  };
};

export const getWeatherError = () => {
  return {
    type: types.GET_WEATHER_ERROR,
  };
};

export const getWeatherThunk = (location: string) => {
  return async (dispatch: any) => {
    dispatch(getWeather());

    timerWait = await wait();

    const response = await fetch("api/weather", {
      method: "post",
      body: JSON.stringify({
        location,
      }),
    });
    const weather = await response.json();
    if (response.ok) {
      dispatch(getWeatherSuccess(weather));
    } else {
      dispatch(getWeatherError());
    }
  };
};
