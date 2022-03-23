import { Link } from "react-router-dom";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            FromageContest
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Fromages</Link>
            </li>
            {/* <li>
              <a href="/categories">Catégories</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
