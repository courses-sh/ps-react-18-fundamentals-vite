import { useEffect, useState } from "react";
import useGetRequest from "@/hooks/useGetRequest";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const {get, loadingState} = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    void fetchHouses();
  }, [get]);

  return {houses, setHouses, loadingState};
}

export default useHouses;
