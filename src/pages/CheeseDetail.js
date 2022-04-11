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
import useCheeseIsVoted from "../services/hooks/useCheeseIsVoted";

const CheeseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Normal mode

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
  // const { data: cheese } = useQuery(["cheeses", id], () => getCheese(id), {
  //   enabled: !!id,
  // });

  // const { milkType } = useMilkType(cheese?.milkType);

  // const { cheeseIsVoted: isVoted } = useCheeseIsVoted(id);

  // const queryClient = useQueryClient();

  // const { mutateAsync, status } = useMutation(
  //   async (cheese) => {
  //     await setVotedCheese(cheese);
  //     return updateCheeseVote(cheese.id, cheese.vote);
  //   },
  //   {
  //     onSettled: () => {
  //       // Cheese resource from the API
  //       queryClient.invalidateQueries(["cheeses", id]);
  //       // If I have voted from the local storage
  //       queryClient.invalidateQueries(["cheeseIsVoted", id]);
  //     },
  //   }
  // );
  // const onClickOnVoteCheese = () => mutateAsync(cheese);

  // onSuccess: (data) => {
  //   console.log("data", data);
  //   queryClient.setQueryData(["cheeses", id], data);
  // },

  // onMutate: (data) => {
  //   queryClient.cancelQueries(["cheeses", id])
  //   queryClient.setQueryData(["cheeses", id], data);
  // }

  const onClickDeleteCheese = async () => {
    await deleteCheese(id);

    navigate("/");
  };

  if (!cheese) {
    return <Loader />;
  }
  return (
    <>
      {/* {status === "success" && (
        <div class="alert alert-success shadow-lg max-w-xl m-auto mb-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      )} */}
      <CheeseDetail
        cheese={cheese}
        milkType={milkType}
        onClickDeleteCheese={onClickDeleteCheese}
        onClickOnVoteCheese={onClickOnVoteCheese}
        isVoted={isVoted}
      />
    </>
  );
};

export default CheeseDetailPage;
