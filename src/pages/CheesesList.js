import { useState, useEffect } from "react";
import getCheeses from "../services/api/getCheeses";
import CheesesList from "../components/CheesesList";

const CheesesListPage = () => {
  const [cheeses, setCheeses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getCheeses();
      setCheeses(data);
    };
    getData();
  }, []);
  return <CheesesList cheeses={cheeses} />;
};

export default CheesesListPage;
