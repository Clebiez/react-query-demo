import { useQuery } from "react-query";

import getVotedCheese from "../api/getVotedCheese";

const useCheeseIsVoted = (id) => {
  const { data } = useQuery(["cheeseIsVoted", id], () => getVotedCheese(id), {
    enabled: !!id,
  });

  return { cheeseIsVoted: data };
};

export default useCheeseIsVoted;
