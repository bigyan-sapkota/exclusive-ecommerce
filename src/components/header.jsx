import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  {
    id: 1,
    text: "Home",
    routeTo: "/",
  },
  {
    id: 2,
    text: "About Us",
    routeTo: "/about",
  },
  { id: 3, text: "Contact", routeTo: "/contact" },
  { id: 4, text: "Sign up", routeTo: "/sign-up" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* top header */}
      <div className="bg-dark py-2 hidden lg:block">
        <p className="text-light text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>

      {/* bottom header */}
      <nav className="max-width padding-x flex items-center justify-between py-2 lg:pt-3 lg:pb-4 border-b">
        {/* logo */}
        <h2>Exclusive</h2>

        {/* navigation items for lg*/}
        <div className="lg:flex items-center gap-12 hidden">
          {navigationItems.map((item, i) => (
            <Link to={item.routeTo} key={i} className="font-semibold">
              {item.routeTo}
            </Link>
          ))}
        </div>

        {/* searchbar and cart */}
        <div className="flex items-center gap-6">
          {/* search bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* cart */}
          <IoCartOutline size={24} />
        </div>

        {/* navigation toggle for non lg */}
        <button
          className="bg-dark text-white rounded-full p-1.5 lg:hidden"
          onClick={menuClickHandler}
        >
          {isMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
        </button>
      </nav>

      {/* navigation items for non lg */}
      {isMenuOpen && (
        <div className="fixed top-12 w-full bottom-0 left-0 bg-primary text-light z-50 h-fit py-10 space-y-4">
          {navigationItems.map((item, i) => (
            <Link
              key={i}
              to={item.routeTo}
              className="font-semibold text-center block"
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

const SearchBar = () => {
  return (
    <div className="bg-secondary flex items-center gap-8 py-2 pl-5 pr-2 rounded">
      <input
        type="text"
        placeholder="Search products..."
        className="bg-transparent border-0 outline-none"
      />
      <IoIosSearch />
    </div>
  );
};
