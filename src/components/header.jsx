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
    text: "Products",
    routeTo: "/products",
  },
  { id: 3, text: "Contact", routeTo: "/contact" },
  { id: 4, text: "Sign up", routeTo: "/sign-up" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative">
      {/* top header */}
      <div className="hidden bg-dark py-2 lg:block">
        <p className="text-center text-light">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>

      {/* bottom header */}
      <nav className="max-width padding-x flex items-center justify-between border-b py-2 lg:pb-4 lg:pt-3">
        {/* logo */}
        <h2>Exclusive</h2>

        {/* navigation items for lg*/}
        <div className="hidden items-center gap-12 lg:flex">
          {navigationItems.map((item, i) => (
            <Link to={item.routeTo} key={i} className="font-semibold">
              {item.text}
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

          <button
            className="rounded-full bg-dark p-1.5 text-light lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* navigation items for non lg */}
      {isMenuOpen && (
        <div className="absolute bottom-0 left-0 top-12 z-50 h-fit w-full space-y-4 bg-primary py-10 text-light">
          {navigationItems.map((item, i) => (
            <Link
              key={i}
              to={item.routeTo}
              className="block text-center font-semibold"
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
    <div className="flex items-center gap-8 rounded bg-secondary py-2 pl-5 pr-2">
      <input
        type="text"
        placeholder="Search products..."
        className="border-0 bg-transparent outline-none"
      />
      <IoIosSearch />
    </div>
  );
};
