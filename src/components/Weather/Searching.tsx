import { stateI } from "@/store/reducers/weather";
import { FC } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

interface SearchingProps {}

const Searching: FC<SearchingProps> = ({}) => {
  const { isLoading } = useSelector((state: any) => state.weather);
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "white",
            zIndex: "1",
            filter: "blur(100px)",
          }}
        ></div>
      )}
    </>
  );
};

export default Searching;
