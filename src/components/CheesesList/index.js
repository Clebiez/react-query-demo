import { Link } from "react-router-dom";
import Loader from "../ui/Loader";
import debounce from "../../services/debounce";
import CheesesListItem from "./CheesesListItem";
import Pagination from "./Pagination";
import MilkTypesSelector from "../MilkTypesSelector";

const CheesesList = ({
  cheeses,
  pagination,
  milkTypes,
  onClickOnVoteCheese,
  isLoading,
  search,
  onSearch,
  onSelectMilkType,
  selectedMilkType,
}) => {
  return (
    <>
      <div className="w-full mt-8 mb-16 mx-auto px-24 flex justify-center items-end gap-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recherche</span>
          </label>
          <input
            type="text"
            placeholder="Rechercher"
            className="input input-bordered w-full max-w-xs"
            onChange={debounce(onSearch, 1000)}
            defaultValue={search}
          />
        </div>
        <div className="w-44">
          <MilkTypesSelector
            milkTypes={milkTypes}
            onChange={onSelectMilkType}
            selectedMilkType={selectedMilkType}
          />
        </div>
        <Link to="/cheeses/create" className="btn btn-primary btn-success">
          Ajouter un fromage
        </Link>
      </div>
      <Loader isLoading={isLoading}>
        {cheeses?.length ? (
          <>
            <div className="mt-4 flex flex-wrap mx-auto max-w-5xl gap-4 justify-center">
              {cheeses?.map((cheese) => (
                <CheesesListItem
                  key={cheese.id}
                  cheese={cheese}
                  onClickOnVoteCheese={() => onClickOnVoteCheese(cheese)}
                />
              ))}
            </div>
            <div className="my-12 w-full flex justify-center">
              <Pagination {...pagination} />
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl text-center">Pas de fromage à affiner</h2>
            <p className="mt-4 text-lg text-center">
              Ajustez les filtres ou créez en un nouveau !
            </p>
          </div>
        )}
      </Loader>
    </>
  );
};

export default CheesesList;
