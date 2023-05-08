// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Weather, data } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

let timeoutLocations: NodeJS.Timeout;

const findLocations = (searching: string) => {
  return data.reduce((result: string[] | [], location) => {
    if (location.city.toUpperCase().includes(searching.toUpperCase())) {
      return [...result, location.city];
    }
    return result;
  }, []);
};

let result: null | Promise<any> = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[] | []>
) {
  const searching = JSON.parse(req.body)["searching"];

  clearTimeout(timeoutLocations);

  timeoutLocations = setTimeout(() => {
    const locations = findLocations(searching);

    if (locations) {
      return res.status(200).json(locations);
    }
    return res.status(400).json([]);
  }, 200);
}
