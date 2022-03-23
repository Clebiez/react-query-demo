import { useQuery } from "react-query";

import { useEffect, useState } from "react";

import getMilkTypes from "../api/getMilkTypes";
const useMilkTypes = () => {
  // Normal mode
  const [milkTypes, setMilkTypes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getMilkTypes();
      setMilkTypes(data);
    };
    getData();
  }, []);

  //  React Query mode
  // const { data: milkTypes } = useQuery("milkTypes", getMilkTypes, {
  //   staleTime: 60 * 1000 * 60,
  // });

  return { milkTypes: milkTypes || [] };
};

export default useMilkTypes;
