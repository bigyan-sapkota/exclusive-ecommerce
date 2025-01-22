import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const navigationItems = ["Home", "About Us", "Contact", "Sign Up"];

const Header = () => {
  return (
    <header>
      {/* top header */}
      <div className="bg-dark h-10 flex items-center justify-center">
        <p className="text-light text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>

      {/* bottom header */}
      <nav className="max-width padding-x flex items-center justify-between">
        {/* logo */}
        <h2>Exclusive</h2>

        {/* navigation items */}
        <ul className="flex items-center gap-12">
          {navigationItems.map((item, i) => (
            <li key={i} className="font-semibold">
              {item}
            </li>
          ))}
        </ul>

        {/* searchbar and cart */}
        <div>
          <div className="bg-secondary flex items-center border-4 border-red-700 gap-8 py-2 pl-5 pr-2">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-black bg-transparent"
            />
            <IoIosSearch />
          </div>
          <IoCartOutline size={20} />
        </div>
      </nav>
    </header>
  );
};

<nav className="flex">
  <div>home</div>
  <div>about</div>
  <div>hello</div>
  <div>Contact</div>
</nav>;

export default Header;

// exercise 1 : index.css copy from github and remove all headings styles
