import { useQuery } from "react-query";

import getMilkTypes from "../api/getMilkTypes";

const useMilkTypes = () => {
  const { data: milkTypes } = useQuery("milkTypes", getMilkTypes, {
    staleTime: 60 * 1000 * 60,
  });

  return { milkTypes: milkTypes || [] };
};

export default useMilkTypes;
