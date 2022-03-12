import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import debounce from "../../services/debounce";
import CheesesListItem from "./CheesesListItem";
import Pagination from "./Pagination";
import MilkTypesSelector from "../MilkTypesSelector";
const CheesesList = ({
  cheeses,
  pagination,
  milkTypes,
  onClickOnVoteCheese,
}) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onSelectMilkType = (e) => {
    searchParams.set("milkType", e.target.value);
    searchParams.set("page", 1);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

  const onSearch = (e) => {
    searchParams.set("q", e.target.value);
    searchParams.set("page", 1);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

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
            defaultValue={searchParams.get("q")}
          />
        </div>
        <div className="w-44">
          <MilkTypesSelector
            milkTypes={milkTypes}
            onChange={onSelectMilkType}
            selectedMilkType={searchParams.get("milkType")}
          />
        </div>
        <Link to="/cheeses/create" className="btn btn-primary btn-success">
          Ajouter un fromage
        </Link>
      </div>
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
    </>
  );
};

export default CheesesList;
