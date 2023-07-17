const Header = () => {
  return (
    <nav
      className="bg-blue-600 dark:bg-gray-900 fixed text-white
    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        মডিউল ৭ এর এসাইনমেন্ট:
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          Todo React Application
        </div>
      </div>
    </nav>
  );
};

export default Header;
