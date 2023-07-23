import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav
        className="bg-blue-600 dark:bg-gray-900 fixed text-white
    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  
    w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="navbar-start  lg:hidden flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-800   w-52"
            >
              <li>
                <Link to="/income">Income </Link>
              </li>

              <li>
                <Link to="/expenses">Expence </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost flex normal-case text-xl">
            মডিউল ৮ এর এসাইনমেন্ট
          </a>
        </div>

        <div className="hidden lg:flex max-w-screen-xl   flex-wrap items-center justify-between mx-auto p-4">
          মডিউল ৮ এর এসাইনমেন্ট:
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home </Link>
              </li>

              <li>
                <Link to="/income">Income </Link>
              </li>

              <li>
                <Link to="/expenses">Expence </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
