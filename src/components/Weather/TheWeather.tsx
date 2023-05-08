import InfoGroup from "@/components/InfoGroup";
import Image from "next/image";
import { FC } from "react";
import snow from "../../../public/snow.png";
import rain from "../../../public/rain.png";
import { useSelector } from "react-redux";
import { stateI } from "@/store/reducers/weather";
import dynamic from "next/dynamic";
import { randomInt } from "crypto";

interface TheWeatherProps {}

const weatherType = {
  Rain: "rain",
  Snow: "snow",
};

const TheWeather: FC<TheWeatherProps> = ({}) => {
  const { data } = useSelector((state:any) => state.weather);

  const getImageWeather = (weather: string) => {
    switch (weather) {
      case weatherType.Rain:
        return rain;
      default:
        return snow;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {data && (
        <>
          <div
            style={{
              position: "relative",
              height: "250px",
              width: "100%",
            }}
          >
            <Image
              src={getImageWeather(data.weather)}
              alt="rain"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <InfoGroup>
            <p style={{ fontSize: "3.5em", fontWeight: "650" }}>{data.temp}</p>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
              {data.weather}
            </p>
          </InfoGroup>
        </>
      )}
    </div>
  );
};

export default TheWeather;
