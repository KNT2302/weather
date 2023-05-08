import { FC, useCallback } from "react";
import WeatherCondition from "./WeatherCondition";
import { useSelector } from "react-redux";
import { stateI } from "@/store/reducers/weather";

interface indexProps {}

const conditionNameType = {
  Humidity: "Humidity",
  WindSpeed: "WindSpeed",
};

const WeatherConditions: FC<indexProps> = ({}) => {
  const { data } = useSelector((state: any) => state.weather);

  const getIconCondition = useCallback((conditionName: string) => {
    switch (conditionName) {
      case conditionNameType.Humidity:
        return "H";
      default:
        return "W";
    }
  }, []);
  return (
    <>
      {data && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingTop: "2em",
          }}
        >
          {data.conditions.map((condition:any) => {
            return (
              <WeatherCondition key={condition.detail}>
                <WeatherCondition.Icon>
                  {getIconCondition(condition.detail)}
                </WeatherCondition.Icon>
                <WeatherCondition.Details
                  measure={condition.measure}
                  detail={condition.detail}
                />
              </WeatherCondition>
            );
          })}
        </div>
      )}
    </>
  );
};

export default WeatherConditions;
