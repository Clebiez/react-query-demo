import { useQuery } from "react-query";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import CheesesList from "../components/CheesesList";

import getCheeses from "../services/api/getCheeses";
import useMilkTypes from "../services/hooks/useMilkTypes";
import updateCheeseVote from "../services/api/updateCheeseVote";
import setVotedCheese from "../services/api/setVotedCheese";

const CheesesListPage = () => {
  const { milkTypes } = useMilkTypes();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const milkType = searchParams.get("milkType");
  const q = searchParams.get("q");

  // Normal Mode
  const [data, setData] = useState({
    data: [],
    pagination: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const refetch = useCallback(async ({ milkType, q, page }) => {
    setIsLoading(true);
    const res = await getCheeses({ page, milkType, q });
    setData(res);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    refetch({ milkType, q, page });
  }, [milkType, q, page, refetch]);

  // React Query Mode
  // const { data, isLoading, refetch } = useQuery(
  //   ["cheeses", page, milkType, q],
  //   () => getCheeses({ page, milkType, q }),
  // );

  const onClickOnVoteCheese = async (cheese) => {
    await updateCheeseVote(cheese.id, cheese.vote);
    await setVotedCheese(cheese);
    refetch({ milkType, q, page });
  };

  return (
    <CheesesList
      cheeses={data?.data}
      pagination={data?.pagination}
      milkTypes={milkTypes}
      onClickOnVoteCheese={onClickOnVoteCheese}
      isLoading={isLoading}
    />
  );
};

export default CheesesListPage;
