import { getLocationSuccess } from "@/store/actions/location";
import { getWeatherThunk } from "@/store/actions/weather";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface LocationProps {
  city: string;
}

const Location: FC<LocationProps> = ({ city }) => {
  const dispatch = useDispatch<any>();
  const handleOnClick = () => {
    dispatch(getWeatherThunk(city));
    dispatch(getLocationSuccess([]));
  };
  return (
    <p
      onClick={handleOnClick}
      style={{
        padding: "0 1px",
        background: "gray",
        margin: "0 -1px",
        cursor: "pointer",
      }}
    >
      {city}
    </p>
  );
};

export default Location;
