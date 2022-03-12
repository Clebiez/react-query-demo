import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getMilkType from "../../services/api/getMilkType";
import VoteButton from "../VoteButton";
import getVotedCheese from "../../services/api/getVotedCheese";

const CheesesListItem = ({ cheese, onClickOnVoteCheese }) => {
  const [milkType, setMilkType] = useState(null);
  const [cheeseIsVoted, setCheeseIsVoted] = useState(false);

  useEffect(() => {
    const getData = async (cheese) => {
      const data = await getMilkType(cheese.milkType);
      setMilkType(data);
      const cheeseIsVotedData = await getVotedCheese(cheese.id);
      setCheeseIsVoted(cheeseIsVotedData);
    };
    getData(cheese);
  }, [cheese]);

  return (
    <div className="card w-72 card-bordered bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-52 w-full object-cover"
          src={cheese.picture}
          alt={`${cheese.name}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cheese.name}</h2>
        <p>Région: {cheese.area}</p>
        <p>Lait de {milkType?.name}</p>
        <div className="justify-end card-actions">
          <Link
            to={`/cheeses/${cheese.id}`}
            className="btn btn-secondary btn-sm"
          >
            Détail
          </Link>
          <VoteButton
            vote={cheese.vote}
            onClick={onClickOnVoteCheese}
            className="btn-sm"
            disabled={cheeseIsVoted}
          />
        </div>
      </div>
    </div>
  );
};

export default CheesesListItem;
