// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Weather, data } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weather | null>
) {
  const getWeatherOfLocation = () => {
    const city = JSON.parse(req.body).location;
    return data.find((location) => location.city === city);
  };

  const weather = getWeatherOfLocation();
  if (weather) {
    return res.status(200).json(weather);
  }
  return res.status(404).json(null);
}
