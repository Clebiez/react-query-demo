import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getCheese from "../services/api/getCheese";
import useMilkTypes from "../services/hooks/useMilkTypes";
import CheeseDetail from "../components/CheeseDetail";
import Loader from "../components/ui/Loader";

const CheeseDetailPage = () => {
  const { id } = useParams();
  const { milkTypes } = useMilkTypes();

  const [cheese, setCheese] = useState(null);
  useEffect(() => {
    const getData = async (id) => {
      const data = await getCheese(id);
      setCheese(data);
    };
    getData(id);
  }, [id]);
  if (!cheese) {
    return <Loader />;
  }
  return <CheeseDetail cheese={cheese} milkTypes={milkTypes} />;
};

export default CheeseDetailPage;
