import { Link } from "react-router-dom";
import CheesesListItem from "./CheesesListItem";

const CheesesList = ({ cheeses }) => {
  return (
    <>
      <div className="w-full flex justif-end">
        <Link to="/cheeses/create" className="btn btn-primary btn-success">
          Ajouter un fromage
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap m-auto max-w-5xl gap-4">
        {cheeses.map((cheese) => (
          <CheesesListItem key={cheese.id} cheese={cheese} />
        ))}
      </div>
    </>
  );
};

export default CheesesList;
