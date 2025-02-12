import { FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/use-click-outside";
import { navigationItems } from "../libs/consts";
import { useProfile } from "../queries/use-profile";
import ProfileModal from "./modals/profile-modal";
import UpdateProfileModal from "./modals/update-profile-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const { data: user } = useProfile();

  const closeMobileMeu = () => {
    setIsMenuOpen(false);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const mobileMenuRef = useClickOutside(closeMobileMeu);
  const userMenuRef = useClickOutside(closeUserMenu);

  const profileClickHandler = () => {
    setIsProfileModalOpen(true);
  };

  const updateProfileClickHandler = () => {
    setIsProfileModalOpen(false);
    setIsUpdateProfileModalOpen(true);
  };

  return (
    <header className="relative">
      <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        user={user}
        onClose={() => setIsProfileModalOpen(false)}
        updateProfileClickHandler={updateProfileClickHandler}
      />

      <UpdateProfileModal
        title="Update Profile"
        isOpen={isUpdateProfileModalOpen}
        onClose={() => setIsUpdateProfileModalOpen(false)}
        user={user}
      />

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
          {/* cart */}
          <IoCartOutline size={24} />

          {/* user */}
          {user?.name ? (
            <div className="relative">
              <FaRegUser
                size={22}
                className="custom-transition cursor-pointer hover:text-primary"
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
              />
              {isUserMenuOpen && (
                <div
                  className="absolute right-0 top-8 flex w-24 flex-col items-center bg-black p-1"
                  ref={userMenuRef}
                >
                  <button
                    className="custom-transition text-white hover:text-primary"
                    onClick={profileClickHandler}
                  >
                    Profile
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/sign-in">
              <button className="custom-transition border-2 border-black bg-black px-4 py-1 font-medium text-white hover:bg-white hover:text-black">
                Sign In
              </button>
            </Link>
          )}

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
        <div
          className="absolute bottom-0 left-0 top-12 z-50 h-fit w-full space-y-4 bg-primary py-10 text-light"
          ref={mobileMenuRef}
        >
          {navigationItems.map((item, i) => (
            <Link
              key={i}
              to={item.routeTo}
              className="block text-center font-semibold"
              onClick={closeMobileMeu}
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
