const MainLayout = ({ children }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            FromageContest
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/">Fromages</a>
            </li>
            <li>
              <a href="/categories">Catégories</a>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
