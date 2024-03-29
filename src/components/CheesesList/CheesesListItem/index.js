import { Link } from "react-router-dom";
import useMilkType from "../../../services/hooks/useMilkType";
import useCheeseIsVoted from "../../../services/hooks/useCheeseIsVoted";
import VoteButton from "../../VoteButton";

const CheesesListItem = ({ cheese, onClickOnVoteCheese }) => {
  const { milkType } = useMilkType(cheese.milkType);

  const { cheeseIsVoted } = useCheeseIsVoted(cheese.id);

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
            disabled={cheeseIsVoted}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CheesesListItem;
