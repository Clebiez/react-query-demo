import clsx from "clsx";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

const Pagination = ({ totalPages, currentPage }) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onChangePage = (page) => {
    searchParams.set("page", page);
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <div className="btn-group">
      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          const page = index + 1;
          return (
            <button
              className={`btn btn-lg ${clsx({
                "btn-active": currentPage === page,
              })}`}
              onClick={() => onChangePage(page)}
              key={index}
            >
              {page}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
