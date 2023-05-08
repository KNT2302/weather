export const data: Weather[] = [
  {
    city: "London",
    weather: "snow",
    temp: "1",
    conditions: [
      {
        detail: "Humidity",
        measure: "99%",
      },
      {
        detail: "Wind Speed",
        measure: "4km/h",
      },
    ],
  },
  {
    city: "US",
    weather: "rain",
    temp: "10",
    conditions: [
      {
        detail: "Humidity",
        measure: "80%",
      },
      {
        detail: "Wind Speed",
        measure: "5km/h",
      },
    ],
  },
];

type weather = "snow" | "rain" | "cloud" | "mist" | "clear";

interface weatherCondition {
  detail: string;
  measure: string;
}

export interface Weather {
  city: string;
  weather: weather;
  temp: string;
  conditions: weatherCondition[];
}
