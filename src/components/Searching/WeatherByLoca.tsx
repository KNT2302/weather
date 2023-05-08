import { FC } from "react";
import Loading from "../Loading";
import { useSelector } from "react-redux";

interface WeatherByLocaProps {}

const WeatherByLoca: FC<WeatherByLocaProps> = ({}) => {
  const { isLoading } = useSelector((state: any) => state.weather);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {isLoading && <Loading />}
    </div>
  );
};

export default WeatherByLoca;
