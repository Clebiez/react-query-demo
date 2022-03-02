import { Link } from "react-router-dom";
import useMilkTypes from "../../services/hooks/useMilkTypes";

const CheesesListItem = ({ cheese }) => {
  const { milkTypes } = useMilkTypes();
  return (
    <div className="card w-72 card-bordered bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-56 w-full object-cover"
          src={cheese.picture}
          alt={`${cheese.name}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cheese.name}</h2>
        <p>Région: {cheese.area}</p>
        {milkTypes.length && (
          <p>
            Lait de{" "}
            {milkTypes.find((milkType) => milkType.id === cheese.milkType).name}
          </p>
        )}
        <div className="justify-end card-actions">
          <Link
            to={`/cheeses/${cheese.id}`}
            className="btn btn-secondary btn-sm"
          >
            Détail
          </Link>
          <button className="btn btn-primary btn-sm">
            Voter ({cheese.vote})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheesesListItem;
