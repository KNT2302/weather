import { stateI } from "@/store/reducers/weather";
import { FC } from "react";
import { useSelector } from "react-redux";
import error from "../../../public/404.png";
import Image from "next/image";

interface ErrorSearchProps {}

const ErrorSearch: FC<ErrorSearchProps> = ({}) => {
  const { isError } = useSelector((state: any) => state.weather);
  return (
    <>
      {isError && (
        <div style={{padding:'1em 0'}}>
          <div style={{ position: "relative", width: "100%", height: "250px" }}>
            <Image
              src={error}
              alt="error"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p style={{textAlign:"center", paddingTop:'1em',color:'red'}}>Opps! Can not find location</p>
        </div>
      )}
    </>
  );
};

export default ErrorSearch;
