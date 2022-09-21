import { useParams, useNavigate } from "react-router-dom";
import CheeseDetail from "../components/CheeseDetail";
import Loader from "../components/ui/Loader";

import getCheese from "../services/api/getCheese";
import deleteCheese from "../services/api/deleteCheese";
import useMilkType from "../services/hooks/useMilkType";
import { useQuery, useQueryClient } from "react-query";
import useCheeseIsVoted from "../services/hooks/useCheeseIsVoted";
import useVoteForCheeseMutation from "../services/hooks/useVoteForCheeseMutation";

const CheeseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: cheese } = useQuery(["cheeses", id], () => getCheese(id), {
    enabled: !!id,
  });

  console.log("cheese", cheese);

  const { milkType } = useMilkType(cheese?.milkType);

  const { cheeseIsVoted: isVoted } = useCheeseIsVoted(id);

  const { mutateAsync } = useVoteForCheeseMutation();
  const onClickOnVoteCheese = () => mutateAsync(cheese);

  const onClickDeleteCheese = async () => {
    await deleteCheese(id);
    await queryClient.invalidateQueries("cheeses");
    navigate("/");
  };

  if (!cheese) {
    return <Loader />;
  }
  return (
    <CheeseDetail
      cheese={cheese}
      milkType={milkType}
      onClickDeleteCheese={onClickDeleteCheese}
      onClickOnVoteCheese={onClickOnVoteCheese}
      isVoted={isVoted}
    />
  );
};

export default CheeseDetailPage;
