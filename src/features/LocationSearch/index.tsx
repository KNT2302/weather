import Input from "@/components/Input";
import { FC, useRef } from "react";
import RecommendLoca from "./RecommendLoca";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "@/store/actions/weather";
import { getLocationSuccess, getLocations } from "@/store/actions/location";
import WeatherByLoca from "@/components/Searching/WeatherByLoca";
import { useEffect } from "react";
import {GrLocation} from "react-icons/gr"

interface LocationSearchProps {}

const LocationSearch: FC<LocationSearchProps> = ({}) => {
  const location = useRef<HTMLInputElement>(null);

  const { data } = useSelector((state: any) => state.weather);

  const dispatch = useDispatch<any>();

  const timerGetSearching = useRef<NodeJS.Timeout>();

  const handleOnChange = () => {
    clearTimeout(timerGetSearching.current);
    timerGetSearching.current = setTimeout(() => {
      if (location.current) {
        if (location.current.value) {
          dispatch(getLocations(location.current.value));
        } else {
          dispatch(getLocationSuccess([]));
        }
      }
    }, 300);
  };

  useEffect(() => {
    if (location.current) {
      location.current.value = data?.city || "";
    }
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        height: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          fontWeight:'700'
        }}
      >
       <GrLocation/>
      </div>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Input
          onChange={handleOnChange}
          ref={location}
          placeholder="Enter Your Location"
        />

        <RecommendLoca />
      </div>
      <WeatherByLoca />
      {/* <Button handleOnClick={searchWeather} /> */}
    </div>
  );
};

export default LocationSearch;
