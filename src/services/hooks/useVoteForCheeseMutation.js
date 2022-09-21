import { useMutation, useQueryClient } from "react-query";
import setVotedCheeses from "../api/setVotedCheese";
import updateCheeseVote from "../api/updateCheeseVote";

const useVoteForCheeseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (cheese) => {
      await setVotedCheeses(cheese);
      return updateCheeseVote(cheese.id, cheese.vote);
    },
    {
      onSettled: () => {
        // Cheese resource from the API
        queryClient.invalidateQueries(["cheeses"]);
        // If I have voted from the local storage
        queryClient.invalidateQueries(["cheeseIsVoted"]);
      },
    }
  );
};

export default useVoteForCheeseMutation;
