import Loading from "@/components/Loading";
import Location from "@/components/Searching/Location";
import { getDataLocations, getLocationSuccess } from "@/store/actions/location";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface RecommendLocaProps {}

const RecommendLoca: FC<RecommendLocaProps> = ({}) => {
  const { isLoading, searching, locations } = useSelector(
    (state: any) => state.location
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (searching) {
      dispatch(getDataLocations());
    }
  }, [searching, dispatch]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        padding: "1px",
        zIndex: "2",
      }}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "gray",
            padding: ".25em 0",
          }}
        >
          <Loading />
        </div>
      ) : (
        <>
          {locations.map((location: string) => {
            return <Location city={location} key={location} />;
          })}
        </>
      )}
    </div>
  );
};

export default RecommendLoca;
