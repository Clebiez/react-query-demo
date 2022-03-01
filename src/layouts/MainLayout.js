const MainLayout = ({ children }) => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">
            FromageContest
          </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
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
