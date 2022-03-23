import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CheeseDetail from "../components/CheeseDetail";
import Loader from "../components/ui/Loader";

import updateCheeseVote from "../services/api/updateCheeseVote";
import getCheese from "../services/api/getCheese";
import getMilkType from "../services/api/getMilkType";
import setVotedCheese from "../services/api/setVotedCheese";
import getVotedCheese from "../services/api/getVotedCheese";
import deleteCheese from "../services/api/deleteCheese";
import useMilkType from "../services/hooks/useMilkType";
import { useQuery, useMutation, useQueryClient } from "react-query";

const CheeseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Normal Mode

  const [cheese, setCheese] = useState({});
  const [isVoted, setIsVoted] = useState(false);
  const { milkType } = useMilkType(cheese?.milkType);

  const getData = async (id) => {
    const dataCheese = await getCheese(id);
    setCheese(dataCheese);

    const isVotedData = await getVotedCheese(id);
    setIsVoted(!!isVotedData);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const onClickOnVoteCheese = async () => {
    await updateCheeseVote(cheese.id, cheese.vote);
    await setVotedCheese(cheese);
    getData(id);
  };

  // React Query Mode
  // const { data: cheese } = useQuery(["cheese", id], () => getCheese(id), {
  //   enabled: !!id,
  // });
  // const { data: isVoted } = useQuery(
  //   ["votedCheese", id],
  //   () => getVotedCheese(id),
  //   { enabled: !!id }
  // );

  // const { milkType } = useMilkType(cheese?.milkType);

  // const queryClient = useQueryClient();

  // const voteCheeseMutation = useMutation(
  //   async (cheese) => {
  //     await updateCheeseVote(cheese.id, cheese.vote);
  //     await setVotedCheese(cheese);
  //   }
  //   // {
  //   //   onMutate: () => {
  //   //     const previousCheese = queryClient.getQueryData(["cheese", id]);
  //   //     queryClient.setQueryData(["cheese", id], {
  //   //       ...previousCheese,
  //   //       vote: previousCheese.vote + 1,
  //   //     });

  //   //     queryClient.setQueryData(["votedCheese", id], true);
  //   //     return { previousCheese, isVoted: false }; // Context
  //   //   },
  //   //   onError: (err, cheese, context) => {
  //   //     queryClient.setQueryData(["cheese", id], context.previousCheese);

  //   //     queryClient.setQueryData(["votedCheese", id], false);
  //   //   },
  //   //   onSettled: () => {
  //   //     // Cheese resource from the API
  //   //     queryClient.invalidateQueries(["cheese", id]);
  //   //     // If I have voted from the local storage
  //   //     queryClient.invalidateQueries(["votedCheese", id]);
  //   //   },
  //   // }
  // );

  // const onClickOnVoteCheese = () => voteCheeseMutation.mutate(cheese);

  const onClickDeleteCheese = async () => {
    await deleteCheese(id);
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
