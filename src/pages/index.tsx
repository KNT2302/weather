import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "../store/actions/weather";
import Input from "@/components/Input";
import LocationSearch from "@/features/LocationSearch";
import TheWeather from "@/components/Weather/TheWeather";
import WeatherConditions from "@/components/Weather/WeatherConditions";
import ErrorSearch from "@/components/Weather/ErrorSearch";
import Searching from "@/components/Weather/Searching";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        padding: "1em",
        background: "#083b5e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "1em",
          padding: "1em",
        }}
      >
        <LocationSearch />
        <div style={{position:'relative', overflow:'hidden'}}>
          <Searching />
          <TheWeather />
          <WeatherConditions />
          <ErrorSearch />
        </div>
      </div>
    </div>
  );
}
