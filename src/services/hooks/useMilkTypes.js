import { useEffect, useState } from "react";
import getMilkTypes from "../api/getMilkTypes";
const useMilkTypes = () => {
  const [milkTypes, setMilkTypes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getMilkTypes();
      setMilkTypes(data);
    };
    getData();
  }, []);

  return { milkTypes };
};

export default useMilkTypes;
