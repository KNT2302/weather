import InfoGroup from "@/components/InfoGroup";
import { FC, ReactNode } from "react";

interface WeatherConditionDetailsP {
  detail: string;
  measure: string;
}
const WeatherCondition = ({ children }: { children: ReactNode }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

const WeatherConditionIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: ".5em",
      }}
    >
      {children}
    </div>
  );
};

const WeatherConditionDetails = ({
  detail,
  measure,
}: WeatherConditionDetailsP) => {
  return (
    <InfoGroup>
      <div>
        <p style={{ fontSize: "1.4em", fontWeight: "550" }}>{measure}</p>
        <p style={{ fontSize: "1em" }}>{detail}</p>
      </div>
    </InfoGroup>
  );
};

WeatherCondition.Icon = WeatherConditionIcon;
WeatherCondition.Details = WeatherConditionDetails;

export default WeatherCondition;
