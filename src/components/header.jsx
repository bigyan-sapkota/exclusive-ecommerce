import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import { useProfile } from "../queries/use-profile";

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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { data: user } = useProfile();

  const profileClickHandler = () => {
    setIsProfileModalOpen(true);
  };

  return (
    <header className="relative">
      <Modal
        title="User Details"
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      >
        <div className="space-y-4">
          <div>Name: {user?.name}</div>
          <div>Email: {user?.email}</div>
          {user?.phone && <div>Phone: {user?.phone}</div>}
        </div>
      </Modal>
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

          {/* user */}
          <div className="relative">
            <FaRegUser
              size={22}
              className="custom-transition cursor-pointer hover:text-primary"
              onClick={() => setIsUserMenuOpen(true)}
            />
            {isUserMenuOpen && (
              <div className="absolute right-0 top-8 flex w-24 flex-col items-center bg-black p-1">
                <button
                  className="custom-transition text-white hover:text-primary"
                  onClick={profileClickHandler}
                >
                  Profile
                </button>
              </div>
            )}
          </div>

          {/* hamburger for large screen */}
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
