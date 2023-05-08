import { Dispatch } from "react";
import { types } from "./types/location";
import { wait } from "@/utils/common";
import { data } from "@/data";
import { serialize } from "v8";

export const getLocations = (searching: string) => {
  return {
    type: types.GET_LOCATIONS,
    payload: searching,
  };
};

export const setIsLoading = () => {
  return {
    type: "",
  };
};

export const getLocationSuccess = (locations: string[] | []) => {
  return {
    type: types.GET_LOCATIONS_SUCCESS,
    payload: locations,
  };
};

export const getDataLocations = () => {
  return async (dispatch: any, getState: any) => {
    const { searching } = getState().location;

    dispatch(setIsLoading());
    const response = await fetch("/api/locations", {
      method: "post",
      body: JSON.stringify({
        searching,
      }),
    });
    const locations = await response.json();


    dispatch(getLocationSuccess(locations));
  };
};
