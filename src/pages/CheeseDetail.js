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

const CheeseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cheese, setCheese] = useState(null);
  const [milkType, setMilkType] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  const getData = async (id) => {
    const dataCheese = await getCheese(id);
    setCheese(dataCheese);
    const dataMilkType = await getMilkType(dataCheese.milkType);
    setMilkType(dataMilkType);

    const isVotedData = await getVotedCheese(id);
    setIsVoted(!!isVotedData);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const onClickDeleteCheese = async () => {
    await deleteCheese(id);
    navigate("/");
  };

  const onClickOnVoteCheese = async () => {
    await updateCheeseVote(cheese.id, cheese.vote);
    await setVotedCheese(cheese);
    getData(id);
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
