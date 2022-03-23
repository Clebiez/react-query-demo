import { useNavigate } from "react-router-dom";
import createCheese from "../services/api/createCheese";
import CheeseForm from "../components/CheeseForm";
import useMilkTypes from "../services/hooks/useMilkTypes";
import { useQueryClient } from "react-query";
const CheeseCreatePage = () => {
  const navigate = useNavigate();

  const { milkTypes } = useMilkTypes();

  // const queryClient = useQueryClient();

  const handleSubmit = async (body) => {
    const cheese = await createCheese(body);
    // await queryClient.invalidateQueries("cheeses");
    navigate(`/cheeses/${cheese.id}`);
  };

  return <CheeseForm onSubmit={handleSubmit} milkTypes={milkTypes} />;
};

export default CheeseCreatePage;
