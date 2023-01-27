import { useQuery } from "react-query";

import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import CheesesList from "../components/CheesesList";

import getCheeses from "../services/api/getCheeses";
import useMilkTypes from "../services/hooks/useMilkTypes";
import useVoteForCheeseMutation from "../services/hooks/useVoteForCheeseMutation";

const CheesesListPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const milkType = searchParams.get("milkType");
  const q = searchParams.get("q");

  const { milkTypes } = useMilkTypes();

  const { data, isLoading } = useQuery(["cheeses", page, milkType, q], () =>
    getCheeses({ page, milkType, q })
  );

  const { mutateAsync: onClickOnVoteCheese } = useVoteForCheeseMutation();

  const onSearch = (value) => {
    searchParams.set("q", value);
    searchParams.set("page", 1);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

  const onSelectMilkType = (value) => {
    searchParams.set("milkType", value);
    searchParams.set("page", 1);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <CheesesList
      cheeses={data?.data}
      pagination={data?.pagination}
      milkTypes={milkTypes}
      onClickOnVoteCheese={onClickOnVoteCheese}
      onSelectMilkType={onSelectMilkType}
      onSearch={onSearch}
      isLoading={isLoading}
      search={q}
      selectedMilkType={milkType}
    />
  );
};

export default CheesesListPage;
