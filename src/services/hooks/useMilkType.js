import { useQuery } from "react-query";

import getMilkType from "../api/getMilkType";
const useMilkType = (id) => {
  const { data: milkType } = useQuery(
    ["milkTypes", id],
    () => getMilkType(id),
    {
      enabled: !!id,
      staleTime: 60 * 1000 * 60,
    }
  );

  return { milkType: milkType || [] };
};

export default useMilkType;
